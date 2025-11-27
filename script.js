// Typed effect
(function(){
  const el = document.getElementById('typed');
  const words = ['Ethical Hacker','Web Penetration Tester','Wi‑Fi Security Specialist','OSINT Researcher'];
  let idx=0,char=0,forward=true;
  function step(){
    const w = words[idx];
    if(forward){
      char++;
      if(char> w.length){forward=false;setTimeout(step,900);return}
    } else {
      char--; if(char<0){forward=true;idx=(idx+1)%words.length}
    }
    el.textContent = w.slice(0,char);
    setTimeout(step, forward?80:40);
  }
  step();
})();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target) } })
},{threshold:0.12});
reveals.forEach(r=>obs.observe(r));

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click',()=>{
  if(nav.style.display==='flex'){nav.style.display='';menuBtn.innerHTML='<i class="fas fa-bars"></i>'}
  else{nav.style.display='flex';nav.style.flexDirection='column';nav.style.gap='1.4rem';menuBtn.innerHTML='<i class="fas fa-times"></i>'}
});

// Active link on scroll
const sections = Array.from(document.querySelectorAll('main section'));
const links = Array.from(document.querySelectorAll('nav a'));
window.addEventListener('scroll',()=>{
  const top = window.scrollY + 120;
  let cur = sections[0].id;
  for(const s of sections){ if(s.offsetTop <= top) cur = s.id }
  links.forEach(a=>a.classList.toggle('active', a.getAttribute('href') === '#'+cur));
});

// Smooth scroll
links.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth',block:'start'})}));
