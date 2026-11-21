export function generateWorkout(catalog,{goal="hipertrofia",level="iniciante",minutes=45,groups=[],equipment="academia",focus=[]}={}){
const templates={hipertrofia:{sets:3,reps:10,rest:75},forca:{sets:4,reps:6,rest:120},resistencia:{sets:2,reps:15,rest:45},condicionamento:{sets:3,reps:12,rest:45}};
const base=templates[goal]||templates.hipertrofia;
const allowed=Array.isArray(groups)?groups:[];
const matchEquipment=e=>equipment==="academia"||equipment==="halteres"&&/halteres|peso corporal|colchonete/i.test(e.equipment)||equipment==="corporal"&&/peso corporal|colchonete/i.test(e.equipment);
const normalize=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const isTimeBased=e=>/prancha|dead bug|bird dog/i.test(e.name);
const pool=catalog.filter(e=>(!allowed.length||allowed.includes(e.group))&&matchEquipment(e)&&!isTimeBased(e));
const duration=Number(minutes)||45;
const count=duration<=30?4:duration<=45?5:duration<=60?6:8;
const categories=Array.isArray(focus)&&focus.length?focus:allowed;
const matches=(e,c)=>{const key=normalize(c),name=normalize(e.name),secondary=normalize(e.secondary);if(key==="biceps")return /rosca|barra fixa/.test(name);if(key==="triceps")return /triceps/.test(name);if(key==="core")return e.group==="Core";if(key==="ombros")return e.group==="Ombros";if(key==="peito")return e.group==="Peito";if(key==="costas")return e.group==="Costas";if(key==="pernas")return e.group==="Pernas";return normalize(e.group)===key||secondary.includes(key)};
const selected=[],seen=new Set();
const add=e=>{if(!e||seen.has(e.name)||selected.length>=count)return;seen.add(e.name);selected.push(e)};
const buckets=categories.map(c=>pool.filter(e=>matches(e,c)));
for(const b of buckets)if(b.length)add(b[0]);
let progressed=true;while(selected.length<count&&progressed){progressed=false;for(const b of buckets){const next=b.find(e=>!seen.has(e.name));if(next){add(next);progressed=true}if(selected.length>=count)break}}
for(const e of pool)if(selected.length<count)add(e);
return selected.map(e=>({name:e.name,sets:level==="iniciante"?Math.min(base.sets,3):base.sets,reps:base.reps,load:0,rest:base.rest,notes:"Sugestão inicial; ajuste com orientação profissional."}))
}
