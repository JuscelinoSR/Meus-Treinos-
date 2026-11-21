// Workout Builder — domínio independente da interface, sem APIs ou serviços pagos.
// O adaptador da aplicação existente deverá fornecer armazenamento e IDs do catálogo.
export const GOALS = Object.freeze(["hipertrofia","forca","condicionamento"]);
const assert = (ok, message) => { if (!ok) throw new Error(message); };
const integer = (value, min, max, field) => { assert(Number.isInteger(value) && value >= min && value <= max, field + " inválido"); return value; };
const text = (value, field, max=120) => { assert(typeof value === "string" && value.trim().length > 0 && value.trim().length <= max, field + " inválido"); return value.trim(); };
const validDate = value => typeof value === "string" && !Number.isNaN(Date.parse(value));
export function validateWorkout(workout, exerciseIds) {
  assert(workout && typeof workout === "object", "Ficha inválida");
  const id = text(workout.id,"ID");
  const name = text(workout.name,"Nome");
  assert(Array.isArray(workout.exercises) && workout.exercises.length > 0, "Adicione pelo menos um exercício");
  const ids = new Set(exerciseIds.map(Number));
  const exercises = workout.exercises.map((e, i) => {
    const exerciseId = integer(Number(e.exerciseId),1,999999,"Exercício");
    assert(ids.has(exerciseId), "Exercício fora do catálogo: " + exerciseId);
    const sets = integer(e.sets,1,20,"Séries");
    const repsMin = integer(e.repsMin,1,100,"Repetições mínimas");
    const repsMax = integer(e.repsMax, repsMin,100,"Repetições máximas");
    const restSeconds = integer(e.restSeconds,0,900,"Descanso");
    const loadKg = e.loadKg == null ? null : Number(e.loadKg);
    assert(loadKg === null || (Number.isFinite(loadKg) && loadKg >= 0 && loadKg <= 2000), "Carga inválida");
    return {exerciseId,sets,repsMin,repsMax,restSeconds,loadKg,notes:typeof e.notes==="string"?e.notes.slice(0,500):"",order:i};
  });
  return {id,name,exercises,notes:typeof workout.notes==="string"?workout.notes.slice(0,1000):"",updatedAt:validDate(workout.updatedAt)?workout.updatedAt:new Date().toISOString()};
}
export function createWorkout({id,name,exercises,notes=""},exerciseIds) {
  return validateWorkout({id,name,exercises,notes},exerciseIds);
}
export function updateWorkout(existing,changes,exerciseIds) {
  assert(existing && existing.id, "Ficha original não encontrada");
  assert(!("id" in changes) || changes.id===existing.id, "Não é permitido trocar o ID da ficha");
  return validateWorkout({...existing,...changes,id:existing.id},exerciseIds);
}
export function cloneWorkoutSnapshot(workout) {
  // Cópia isolada: alterações futuras na ficha não alteram sessões históricas.
  return JSON.parse(JSON.stringify(workout));
}
export function suggestWorkout({goal="hipertrofia",days=3,availableExerciseIds=[]},catalog) {
  assert(GOALS.includes(goal), "Objetivo inválido");
  integer(days,2,6,"Dias por semana");
  assert(Array.isArray(catalog), "Catálogo inválido");
  const allowed = new Set(availableExerciseIds.map(Number));
  const pool = catalog.filter(e=>allowed.size===0||allowed.has(Number(e.id)));
  assert(pool.length>0,"Nenhum exercício disponível");
  const groups = ["Peito","Costas","Membros inferiores","Ombros","Braços","Abdômen/Core"];
  const schemes = {hipertrofia:[3,8,12,90],forca:[4,4,6,150],condicionamento:[2,12,15,60]};
  const [sets,repsMin,repsMax,restSeconds]=schemes[goal];
  return Array.from({length:days},(_,day)=>{
    const preferred = [groups[day%groups.length],groups[(day+2)%groups.length]];
    const selected = [...pool.filter(e=>preferred.includes(e.categoria)),...pool.filter(e=>!preferred.includes(e.categoria))].slice(0,Math.min(5,pool.length));
    return {id:"draft-"+(day+1),name:"Treino "+String.fromCharCode(65+day),goal,provisional:true,exercises:selected.map(e=>({exerciseId:Number(e.id),sets,repsMin,repsMax,restSeconds,loadKg:null,notes:""}))};
  });
}
