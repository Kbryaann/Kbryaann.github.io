const el=document.querySelector('.type');let i=0;const txt=el.textContent;el.textContent='';
function type(){ if(i<txt.length){ el.textContent+=txt.charAt(i); i++; setTimeout(type,80);} }
type();