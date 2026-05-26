/* ============================================================
   GANTS — Skills Bar Animation
   File: js/skills.js
   ============================================================ */

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-layout').forEach(el => barObserver.observe(el));
