/* BUILD 3 PART 1C */

window.addEventListener("load",()=>{
 const loader=document.getElementById("loader");
 setTimeout(()=>{
   loader.style.opacity="0";
   setTimeout(()=>loader.style.display="none",800);
 },1400);
});

// Ken Burns hero
const bg=document.querySelector(".hero-background");
let scale=1.08;
function animateHero(){
  scale+=0.00008;
  if(bg){bg.style.transform=`scale(${scale})`;}
  requestAnimationFrame(animateHero);
}
if(bg){requestAnimationFrame(animateHero);}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
 a.addEventListener("click",e=>{
   e.preventDefault();
   document.querySelector(a.getAttribute("href"))
     ?.scrollIntoView({behavior:"smooth"});
 });
});

// Reveal animation
const io=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     entry.target.classList.add("show");
   }
 });
},{threshold:0.15});

document.querySelectorAll(".intro,.timeline-item,.coming-soon").forEach(el=>{
 el.classList.add("fade-up");
 io.observe(el);
});

// Hide scroll indicator
const indicator=document.querySelector(".scroll-indicator");
window.addEventListener("scroll",()=>{
 if(!indicator) return;
 indicator.style.opacity=window.scrollY>60?"0":"1";
 indicator.style.transition="opacity .4s";
});
