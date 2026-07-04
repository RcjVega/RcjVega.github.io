document.addEventListener('DOMContentLoaded',()=>{
  document.body.style.opacity='0';
  document.body.style.transition='opacity .35s';
  requestAnimationFrame(()=>document.body.style.opacity='1');

  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('nav a').forEach(link=>{
    const href=(link.getAttribute('href')||'').toLowerCase();
    if(href===current){link.classList.add('active');link.setAttribute('aria-current','page');}
  });

  const btn=document.createElement('button');
  btn.className='theme-toggle';
  btn.setAttribute('aria-label','Toggle dark mode');
  const saved=localStorage.getItem('theme');
  if(saved==='dark') document.body.classList.add('dark');
  const sync=()=>{const dark=document.body.classList.contains('dark');btn.textContent=dark?'☀':'☾';btn.title=dark?'Use light mode':'Use dark mode';};
  sync();
  btn.onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');sync();};
  document.body.appendChild(btn);

  if(!document.querySelector('footer')){
    const footer=document.createElement('footer');
    footer.innerHTML=`<div class="footer-inner"><div><strong>Ray Carlos Junior Vega Lugo</strong><p>Economist · Researcher · Lecturer</p></div><div class="footer-links"><a href="index.html">Home</a><a href="research.html">Research</a><a href="publications.html">Publications</a><a href="teaching.html">Teaching</a><a href="cv.html">CV</a></div><div><p>© ${new Date().getFullYear()} Ray Carlos Junior Vega Lugo</p><p>Academic website · Lima, Peru</p></div></div>`;
    document.body.appendChild(footer);
  }
});