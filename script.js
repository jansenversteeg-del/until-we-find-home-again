// Build 3 Part 2A-3
window.addEventListener('load',()=>{
 const obs=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
 },{threshold:.2});
 document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
});
