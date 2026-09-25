'use strict';
// Section navigation only. Scientific state and calculations remain in app.js.
(() => {
 const links = [...document.querySelectorAll('.masthead nav a')];
 const sections = links.map(a => document.querySelector(a.hash)).filter(Boolean);
 let scheduled = false;
 function updateNavigation() {
  scheduled = false;
  const threshold = document.querySelector('.masthead').getBoundingClientRect().height + 100;
  let current = sections[0];
  for (const section of sections) {
   if (section.getBoundingClientRect().top <= threshold) current = section;
  }
  // The learning chapter includes the self-learning and model-family sections.
  if (document.querySelector('#family').getBoundingClientRect().top <= threshold &&
      document.querySelector('#evidence').getBoundingClientRect().top > threshold) {
   current = document.querySelector('#mechanism');
  }
  links.forEach(link => {
   if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
   else link.removeAttribute('aria-current');
  });
 }
 function requestUpdate() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
 }
 addEventListener('scroll', requestUpdate, { passive: true });
 addEventListener('resize', requestUpdate);
 addEventListener('hashchange', requestUpdate);
 updateNavigation();
})();
