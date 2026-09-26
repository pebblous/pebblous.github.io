'use strict';
// Section navigation only. Scientific state and calculations remain in app.js.
(() => {
 const links = [...document.querySelectorAll('.masthead nav a')];
 const sections = links.map(a => document.querySelector(a.hash)).filter(Boolean);
 const explorer = document.querySelector('#explorer');
 const localLinks = [...document.querySelectorAll('.explorer-local-nav a')];
 const localSections = [...new Set(localLinks.map(a => a.hash))].map(hash => document.querySelector(hash)).filter(Boolean);
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
  let localCurrent = null;
  if (explorer && explorer.getBoundingClientRect().top <= threshold && explorer.getBoundingClientRect().bottom > threshold) {
   localCurrent = localSections[0];
   for (const section of localSections) {
    if (section.getBoundingClientRect().top <= threshold) localCurrent = section;
   }
  }
  localLinks.forEach(link => {
   if (localCurrent && link.hash === '#' + localCurrent.id) link.setAttribute('aria-current', 'location');
   else link.removeAttribute('aria-current');
  });
 }
 function requestUpdate() {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
 }
 addEventListener('scroll', requestUpdate, { passive: true });
 addEventListener('resize', requestUpdate);
 addEventListener('hashchange', requestUpdate);
 function openMethodFromLink() {
  if (location.hash === '#h-method') {
   const method = document.querySelector('#h-method');
   if (method) { method.open = true; method.scrollIntoView({ block: 'start' }); }
  }
 }
 document.querySelectorAll('a[href="#h-method"]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#h-method').open = true;
 }));
 localLinks.forEach(link => link.addEventListener('click', () => {
  const menu = link.closest('.explorer-mobile-nav');
  if (menu) menu.open = false;
 }));
 addEventListener('hashchange', openMethodFromLink);
 openMethodFromLink();
 updateNavigation();
})();
