export function generateWorkout(catalog,{goal="hipertrofia",level="iniciante",minutes=45,groups=[],equipment="academia"}={}){
const templates={hipertrofia:{sets:3,reps:10,rest:75},forca:{sets:4,reps:6,rest:120},resistencia:{sets:2,reps:15,rest:45},condicionamento:{sets:3,reps:12,rest:45}};
const base=templates[goal]||templates.hipertrofia;
const allowed=Array.isArray(groups)?groups:[];
const matchEquipment=e=>equipment==="academia"||equipment==="halteres"&&/halteres|peso corporal|colchonete/i.test(e.equipment)||equipment==="corporal"&&/peso corporal|colchonete/i.test(e.equipment);
const pool=catalog.filter(e=>(!allowed.length||allowed.includes(e.group))&&matchEquipment(e));
const count=Math.max(1,Math.min(8,Math.floor((Math.max(15,Math.min(120,Number(minutes)||45))-5)/(level==="avancado"?9:11))));
const byGroup=new Map();for(const e of pool){if(!byGroup.has(e.group))byGroup.set(e.group,[]);byGroup.get(e.group).push(e)}
const chosen=[];while(chosen.length<count){let added=false;for(const items of byGroup.values()){const e=items.shift();if(e){chosen.push({name:e.name,sets:level==="iniciante"?Math.min(base.sets,3):base.sets,reps:base.reps,load:0,rest:base.rest,notes:"Sugestão inicial; ajuste com orientação profissional."});added=true;if(chosen.length>=count)break}}if(!added)break}
return chosen
}
