const S=[
["Custom Machine Manufacturing","Machines designed and built from scratch around your specific production requirements, operating processes, and needs.","","M4 20h16M6 20V9l6-4 6 4v11M10 20v-6h4v6","custom"],
["Packaging Machinery","Packaging machine manufacturing for industrial production, with tailored machine solutions built to your requirement.","","M3 8l9-5 9 5v8l-9 5-9-5zM3 8l9 5 9-5M12 13v8","packaging"],
["PLC Automation Panels","Control panel solutions for industrial automation using Mitsubishi and Delta PLC platforms.","Mitsubishi, Delta","M4 5h16v14H4zM8 9h3M8 13h3M14 9h2M14 13h2","plc"],
["VFD Panels","Variable frequency drive panel solutions using Delta, Schneider Electric, ABB, and Danfoss equipment.","Delta, Schneider Electric, ABB, Danfoss","M3 12c3-8 5-8 6 0s3 8 6 0 4-8 6 0","vfd"],
["Motor Starter Panels","Motor starter panel solutions using L&T, Schneider Electric, ABB, and C&S components.","L&T, Schneider Electric, ABB, C&S","M12 3v9M6.3 6.3a8 8 0 1 0 11.4 0","starter"],
["Customized Industrial Automation","Automation panels and integrated solutions developed according to individual customer requirements.","","M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2","automation"]];
const esc=s=>s.replace(/&/g,"&amp;");
document.getElementById("svc").innerHTML=S.map(s=>`<article class="card"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${s[3]}"/></svg><h3>${esc(s[0])}</h3>${s[2]?`<div class="brands">${esc(s[2])}</div>`:""}<p>${esc(s[1])}</p><a class="l" href="#contact" data-t="${s[4]}">Discuss This Solution</a></article>`).join("");
document.getElementById("fs").innerHTML=S.map(s=>`<li><a href="#contact" data-t="${s[4]}">${esc(s[0])}</a></li>`).join("");
const cats=["Capping Machines", "Filling Machines", "Labelling & Sleeve Machines", "Bottle Handling & Conveyors"];
const PR=[["Automatic Single Head Capping Machine", 0, "single-capping", "Tightens pre-threaded screw and CTC caps. PLC controlled with touch screen. Model APSHC-140, 15–40 bottles/min."], ["Automatic Multi Head Capping Machine", 0, "multi-capping", "Continuous-motion capping with 4, 6 or 8 heads. Models APMHC-C40/C60/C80, 40–100 bottles/min."], ["Semi-Automatic Volumetric Filling Machine", 1, "semi-volumetric", "Mechanical piston filler for 50–1000 ml, with drip-free nozzles. Model APSVM-V12, up to 20 bottles/min."], ["Semi-Automatic Servo Filling Machine", 1, "semi-servo", "Servo gear-pump filler with PLC-HMI volume setting, 100–5000 ml. Model APSSM-S12."], ["Semi-Automatic Weigh Filling Machine", 1, "semi-weigh", "Loadcell-based filling of 2–15 kg containers, single or dual head. Model APSWF-120."], ["Automatic Volumetric Piston Filling Machine", 1, "auto-volumetric", "Continuous rotary piston filler, 4, 6 or 8 heads, 20 ml to 1000 ml. Models APAVF-V40/V60/V80."], ["Automatic Servo Based Filling Machine", 1, "auto-servo", "Servo gear-pump filler, 4 to 10 heads, 50 ml to 5 litres. Models APASF-S40 to S100."], ["Automatic Single Side Sticker Labelling Machine", 2, "single-labelling", "Applies full or partial self-adhesive labels on round containers. Model APSLM-A100, 30–60 bottles/min."], ["Automatic Double Side Sticker Labelling Machine", 2, "double-labelling", "Front and back labelling with independent dispensers. Model APDLM-A200, 40–150 bottles/min."], ["Automatic Shrink Sleeve Applicator Machine", 2, "sleeve-applicator", "Servo-based sleeve feeding and cutting for varied container shapes. Model APSAM-A200."], ["Automatic Bottle Unscrambler Machine", 3, "unscrambler", "Loads and orients empty containers onto the line, up to 250 bottles/min. Model APBUM-U250."], ["Chain Conveyor", 3, "chain-conveyor", "Pipe-frame conveyor with SS slat chain and VFD drive. Straight or U-type, customisable."], ["Belt Conveyor", 3, "belt-conveyor", "PVC or fabric belt, straight or angled, with VFD speed control and adjustable side guides."]];
document.getElementById("prj").innerHTML=PR.map(p=>`<article class="card" data-c="${cats[p[1]]}"><img class="pimg" src="images/${p[2]}.jpg" alt="${esc(p[0])}" width="800" height="600" loading="lazy"><h3>${esc(p[0])}</h3><p>${esc(p[3])}</p><a class="l" href="#contact" data-t="packaging">Enquire About This Machine</a></article>`).join("");
const fl=document.getElementById("flt");
["All",...cats].forEach((c,i)=>{const b=document.createElement("button");b.textContent=c;b.setAttribute("aria-pressed",i==0);b.onclick=()=>{fl.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x==b));document.querySelectorAll("#prj .card").forEach(k=>k.hidden=!(c=="All"||k.dataset.c==c))};fl.append(b)});
document.getElementById("yr").textContent=new Date().getFullYear();
const tg=document.getElementById("tg"),mn=document.getElementById("menu");
tg.onclick=()=>{const o=mn.classList.toggle("open");tg.setAttribute("aria-expanded",o)};
mn.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mn.classList.remove("open");tg.setAttribute("aria-expanded","false")}));
const map={custom:"Custom machinery",packaging:"Packaging machinery",plc:"PLC panels",vfd:"VFD panels",starter:"Starter panels",automation:"Other automation requirement"};
const f=document.getElementById("f");
document.querySelectorAll("[data-t]").forEach(a=>a.addEventListener("click",()=>{f.type.value=map[a.dataset.t]}));
const secs=[...document.querySelectorAll("main section[id]")],links=[...mn.querySelectorAll("a:not(.btn)")];
addEventListener("scroll",()=>{let cur="home";secs.forEach(s=>{if(s.getBoundingClientRect().top<120)cur=s.id});links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+cur))},{passive:true});
let via="wa";f.querySelectorAll("button[type=submit]").forEach(b=>b.addEventListener("click",()=>via=b.dataset.via));
f.addEventListener("submit",e=>{e.preventDefault();
 const rules={name:"Enter your full name.",phone:"Enter a valid phone number.",email:"Enter a valid email address.",type:"Choose a requirement type.",desc:"Describe your project in a few words."};
 let bad=null;
 for(const k in rules){const el=f[k],er=el.parentElement.querySelector(".err");let ok=el.value.trim()!=="";
  if(k=="phone")ok=/^[+\d][\d\s-]{7,}$/.test(el.value.trim());
  if(k=="email")ok=/^\S+@\S+\.\S+$/.test(el.value.trim());
  el.setAttribute("aria-invalid",!ok);er.textContent=ok?"":rules[k];if(!ok&&!bad)bad=el}
 const m=document.getElementById("msg");
 if(bad){bad.focus();m.style.color="#d92d20";m.textContent="Please fix the highlighted fields.";return}
 const t=`New project inquiry\nName: ${f.name.value}\nCompany: ${f.company.value||"-"}\nPhone: ${f.phone.value}\nEmail: ${f.email.value}\nRequirement: ${f.type.value}\n\n${f.desc.value}`;
 m.style.color="#2e9a3e";m.textContent=via=="wa"?"Opening WhatsApp with your message…":"Opening your email app with your message…";
 const url=via=="wa"?"https://wa.me/919442312359?text="+encodeURIComponent(t):"mailto:arrowautomations@gmail.com?subject="+encodeURIComponent("Project inquiry: "+f.type.value)+"&body="+encodeURIComponent(t);
 if(via=="wa")window.open(url,"_blank","noopener");else location.href=url;
});
