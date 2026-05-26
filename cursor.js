/* Simple custom cursor behavior for GANTS portfolio */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing) {
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
    cursorRing.style.transform = `translate3d(${x - 18}px, ${y - 18}px, 0)`;
  });

  document.querySelectorAll('a, button, .team-card, .nav-links a').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform += ' scale(1.6)';
      cursorRing.style.opacity = '0.9';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = cursor.style.transform.replace(' scale(1.6)', '');
      cursorRing.style.opacity = '0.5';
    });
  });
}
