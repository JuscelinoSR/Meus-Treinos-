import {premiumAssets} from "./exercise-assets.js";
// Ilustração muscular vetorial autoral: representação educativa, não atlas clínico.
// Fotografias: Wikimedia Commons, autores e licenças informados individualmente.
const photos={
"Leg press (genérico)":{file:"Leg Press.jpg",author:"SAgbley",license:"CC BY-SA 4.0"},
"Supino reto":{file:"Bench Press.jpg",author:"Aditya Oberai",license:"CC BY-SA 4.0"},
"Puxada frontal":{file:"Amer-Lat-Pulldown.jpg",author:"Abooyeah",license:"CC BY-SA 4.0"}
};
const groups={Peito:["#ff715c","Peitoral"],Costas:["#ff785b","Dorsais"],Pernas:["#ffad5c","Membros inferiores"],Braços:["#e899ff","Braços"],Ombros:["#ff87af","Deltoides"],Core:["#75ddc1","Abdômen"]};
function anatomy(group){
const [accent,label]=groups[group]||groups.Core;
const back=group==="Costas";
const torso=back?
'<path d="M84 100 Q113 117 142 100 L147 168 Q114 191 79 168Z"/>':
'<path d="M86 100 Q113 111 140 100 L145 168 Q113 185 81 168Z"/>';
const shapes={
Peito:'<path d="M85 111 Q100 99 111 113 L111 143 Q95 152 81 136Z M115 113 Q127 99 141 111 L145 136 Q131 152 115 143Z"/>',
Costas:'<path d="M86 110 Q109 126 111 148 L95 177 L79 164Z M140 110 Q118 126 115 148 L131 177 L147 164Z"/><path d="M101 111 L113 102 L125 111 L116 136 L110 136Z"/>',
Pernas:'<path d="M82 181 Q94 186 108 183 L106 243 L94 258 L78 248Z M118 183 Q132 186 144 181 L148 248 L132 258 L120 243Z M82 266 L98 271 L96 322 L76 322Z M128 271 L145 266 L151 322 L130 322Z"/>',
Braços:'<path d="M66 117 Q76 119 82 138 L72 174 L56 163Z M145 138 Q152 119 162 117 L173 163 L156 174Z M53 170 L70 178 L60 232 L43 227Z M158 178 L175 170 L185 227 L168 232Z"/>',
Ombros:'<path d="M83 100 Q67 101 62 122 L78 143 L88 118Z M143 100 Q159 101 164 122 L148 143 L138 118Z"/>',
Core:'<path d="M93 150 L110 151 L109 173 L92 169Z M116 151 L133 150 L135 169 L117 173Z M93 176 L109 179 L108 194 L94 190Z M117 179 L134 176 L132 190 L118 194Z"/>'
};
const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226 350">
<defs>
<radialGradient id="bg"><stop stop-color="#28352f"/><stop offset="1" stop-color="#0c1210"/></radialGradient>
<linearGradient id="skin" x2=".95" y2="1"><stop stop-color="#b8c3bb"/><stop offset=".48" stop-color="#778c80"/><stop offset="1" stop-color="#33473d"/></linearGradient>
<linearGradient id="muscle" x2=".85" y2="1"><stop stop-color="${accent}"/><stop offset=".48" stop-color="${accent}"/><stop offset="1" stop-color="#813d36"/></linearGradient>
<filter id="glow"><feGaussianBlur stdDeviation="6"/></filter>
</defs>
<rect width="226" height="350" rx="22" fill="url(#bg)"/>
<circle cx="113" cy="164" r="91" fill="${accent}" opacity=".09" filter="url(#glow)"/>
<g stroke="#25392d" stroke-width="1.8" stroke-linejoin="round">
<path d="M92 57 Q113 39 134 57 L136 82 Q132 94 124 97 L124 106 L144 100 Q163 101 169 118 L187 198 L180 236 L167 236 L157 187 L151 154 L149 183 L148 247 L155 324 L129 324 L118 243 L108 243 L97 324 L71 324 L78 247 L77 183 L75 154 L69 187 L59 236 L46 236 L39 198 L57 118 Q63 101 82 100 L102 106 L102 97 Q94 94 90 82Z" fill="url(#skin)"/>
<path d="M95 62 Q113 53 131 62 M103 80 Q113 84 123 80 M113 108 L113 185 M84 122 Q113 140 142 122 M83 174 Q113 190 143 174 M81 246 Q93 259 106 246 M120 246 Q133 259 146 246" fill="none" stroke="#d5ded5" stroke-opacity=".24"/>
<path d="M78 116 Q69 131 69 156 M148 116 Q157 131 157 156 M94 193 L93 235 M132 193 L133 235" fill="none" stroke="#19291e" stroke-opacity=".65"/>
</g>
<g fill="url(#muscle)" stroke="${accent}" stroke-width="1.2" opacity=".96">${shapes[group]||shapes.Core}</g>
<g fill="none" stroke="#fff" stroke-opacity=".3" stroke-width=".9">
<path d="M113 114 L113 139 M93 154 L106 161 M120 161 L132 154 M91 199 L103 207 M123 207 L135 199"/>
</g>
<rect x="12" y="12" width="76" height="24" rx="12" fill="#18251c" stroke="#48604a"/>
<text x="50" y="28" font-size="10" font-weight="700" fill="#b5f2a2" font-family="system-ui,sans-serif" text-anchor="middle">${back?"POSTERIOR":"ANTERIOR"}</text>
<text x="113" y="341" font-size="12" font-weight="700" fill="#e4eee5" font-family="system-ui,sans-serif" text-anchor="middle">${label}</text>
</svg>`;
return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}
export function exerciseMedia(e){
const photo=photos[e.name]||null,group=e.group||"Core";
const premium=premiumAssets[e.name]||null;
return {premiumPhotoUrl:premium?.execucao||null,premiumAnatomyUrl:premium?.anatomia||null,photoUrl:photo?"https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(photo.file)+"?width=420":null,
sourceUrl:photo?"https://commons.wikimedia.org/wiki/File:"+encodeURIComponent(photo.file.replace(/ /g,"_")):null,
credit:photo?photo.author+" · "+photo.license:null,anatomyUrl:anatomy(group),group,front:group!=="Costas"};
}
