// Mídia piloto: fotografias de arquivos licenciados no Wikimedia Commons.
// Diagramas esquemáticos autorais, NÃO são ilustrações anatômicas clínicas.
const photoByName={
"Leg press (genérico)":{file:"Leg Press.jpg",author:"SAgbley",license:"CC BY-SA 4.0"},
"Supino reto":{file:"Bench Press.jpg",author:"Aditya Oberai",license:"CC BY-SA 4.0"},
"Puxada frontal":{file:"Amer-Lat-Pulldown.jpg",author:"Abooyeah",license:"CC BY-SA 4.0"}
};
const groupColors={Peito:"#f0a08e",Costas:"#78b8ee",Pernas:"#e7c16e",Braços:"#bba0f1",Ombros:"#f19bc0",Core:"#7fd7b4"};
export function exerciseMedia(e){
const photo=photoByName[e.name]||null;
const group=e.group||"Core",color=groupColors[group]||"#8cd4a4";
const front=group!=="Costas";
const regions={Peito:'<path d="M45 58 Q60 48 74 60 L74 80 Q61 89 45 80Z M76 60 Q90 48 105 58 L105 80 Q90 89 76 80Z"/>',Costas:'<path d="M43 53 Q75 65 107 53 L98 108 Q75 120 52 108Z"/>',Pernas:'<path d="M52 120 L73 120 L69 177 L52 177Z M78 120 L99 120 L98 177 L81 177Z"/>',Braços:'<path d="M32 60 L43 65 L34 116 L22 113Z M107 65 L118 60 L128 113 L116 116Z"/>',Ombros:'<ellipse cx="38" cy="61" rx="15" ry="14"/><ellipse cx="112" cy="61" rx="15" ry="14"/>',Core:'<path d="M56 86 L94 86 L90 119 L60 119Z"/>'};
const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 205" role="img" aria-label="Esquema ilustrativo do grupo '+group+'"><rect width="150" height="205" rx="16" fill="#142b20"/><circle cx="75" cy="25" r="17" fill="#658675"/><path d="M51 48 Q75 41 99 48 L111 115 L98 120 L94 191 L78 191 L75 128 L72 191 L56 191 L52 120 L39 115Z" fill="#658675"/><path d="M50 50 L32 58 L17 117 L30 122 L48 83 M100 50 L118 58 L133 117 L120 122 L102 83" fill="none" stroke="#658675" stroke-width="13" stroke-linecap="round"/><g fill="'+color+'" opacity=".92">'+(regions[group]||regions.Core)+'</g><text x="75" y="201" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#eaf4eb">'+group+'</text></svg>';
return {photoUrl:photo?'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(photo.file)+'?width=420':null,sourceUrl:photo?'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(photo.file.replace(/ /g,"_")):null,credit:photo?photo.author+' · '+photo.license:null,anatomyUrl:'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg),group,front};
}
