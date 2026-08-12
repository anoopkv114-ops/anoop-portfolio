const progress=document.querySelector(".top-progress");
addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/max*100)+"%"},{passive:true});
const menu=document.querySelector(".menu"),nav=document.querySelector("nav");menu.addEventListener("click",()=>nav.classList.toggle("open"));document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
document.querySelector("#year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));

let percent=0,num=document.querySelector(".loader-num");const loadTimer=setInterval(()=>{percent+=3;if(percent>=100){percent=100;clearInterval(loadTimer)}num.textContent=percent+"%"},45);

if(matchMedia("(pointer:fine)").matches){
 const c=document.querySelector(".cursor"),dot=c.querySelector(".dot"),trail=c.querySelector(".trail"),txt=c.querySelector("b");let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
 addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY;dot.style.left=tx+"px";dot.style.top=ty+"px";txt.style.left=tx+13+"px";txt.style.top=ty+13+"px"});
 function animate(){x+=(tx-x)*.12;y+=(ty-y)*.12;trail.style.left=x+"px";trail.style.top=y+"px";requestAnimationFrame(animate)}animate();
 document.querySelectorAll("a,.magnetic,.project-visual").forEach(el=>{el.addEventListener("mouseenter",()=>{c.classList.add("active");txt.textContent=el.classList.contains("project-visual")?"VIEW":"GO"});el.addEventListener("mouseleave",()=>c.classList.remove("active"))});
 document.querySelectorAll(".magnetic").forEach(el=>{el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect(),dx=(e.clientX-r.left-r.width/2)*.1,dy=(e.clientY-r.top-r.height/2)*.1;el.style.transform=`translate(${dx}px,${dy}px)`});el.addEventListener("mouseleave",()=>el.style.transform="")});
 document.querySelectorAll(".project").forEach(card=>{const visual=card.querySelector(".project-visual");card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect(),dx=(e.clientX-r.left)/r.width-.5,dy=(e.clientY-r.top)/r.height-.5;visual.style.transform=`perspective(900px) rotateY(${dx*3}deg) rotateX(${-dy*3}deg) translateY(-4px)`});card.addEventListener("mouseleave",()=>visual.style.transform="")});
}
