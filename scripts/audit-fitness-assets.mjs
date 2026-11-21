import fs from 'node:fs';
import path from 'node:path';
const root='assets/jsr-fitness-premium';
const dirs=['01_peito','02_costas','03_ombros','04_bracos','05_membros_inferiores','06_abdomen_core'];
const catalog=path.join(root,'research','catalogo-58.json');
const report={timestamp:new Date().toISOString(),catalogFound:fs.existsSync(catalog),total:0,filesFound:0,missing:[],errors:[]};
if(fs.existsSync(catalog)){
  try{
    const raw=JSON.parse(fs.readFileSync(catalog,'utf8'));
    const entries=Array.isArray(raw)?raw:Array.isArray(raw.exercicios)?raw.exercicios:null;
    if(!entries)throw new Error('Formato inválido: esperado array ou objeto.exercicios');
    report.total=entries.length;
    if(entries.length!==58)report.errors.push('Catálogo deve conter 58 exercícios; encontrados '+entries.length);
    const ids=new Set();
    for(const e of entries){
      const id=Number(e.id??e.numero);
      if(!Number.isInteger(id)||id<1||id>58||ids.has(id))report.errors.push('ID inválido ou repetido: '+id);
      ids.add(id);
      for(const kind of ['execucao','anatomia']){
        const folder=({Peito:'01_peito',Costas:'02_costas',Ombros:'03_ombros',Braços:'04_bracos','Membros inferiores':'05_membros_inferiores','Abdômen/Core':'06_abdomen_core'})[e.categoria];
        const slug=e.nome.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
        const file=e.imagens?.[kind]??e[kind]??e['imagem_'+kind]??(folder?`imagens/${folder}/${String(id).padStart(3,'0')}_${slug}_${kind}.webp`:null);
        if(!file){report.missing.push({id,kind,reason:'sem caminho'});continue;}
        const full=path.resolve(root,file);
        const allowed=path.resolve(root)+path.sep;
        if(!full.startsWith(allowed)||!file.endsWith('.webp')){report.errors.push('Caminho inválido: '+file);continue;}
        if(fs.existsSync(full))report.filesFound++;else report.missing.push({id,kind,reason:'arquivo ausente',file});
      }
    }
  }catch(err){report.errors.push(String(err.message));}
}
for(const d of dirs)if(!fs.existsSync(path.join(root,'imagens',d)))report.missing.push({category:d,reason:'pasta não encontrada'});
fs.mkdirSync('reports',{recursive:true});
fs.writeFileSync('reports/fitness-assets-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({total:report.total,found:report.filesFound,missing:report.missing.length,errors:report.errors},null,2));
if(report.errors.length)process.exitCode=1;
