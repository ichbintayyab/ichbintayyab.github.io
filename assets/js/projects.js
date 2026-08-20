/* ============================================================
   PROJECTS PAGE JS — ichbintayyab Portfolio
   Loaded by: pages/projects.html only (after shared.js)
============================================================ */

/* === 3D CARD TILT — large editorial project cards === */
(function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.tilt').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width  - .5;
      var y = (e.clientY - r.top)  / r.height - .5;
      card.style.transform = 'perspective(1200px) rotateX(' + (-y*4) + 'deg) rotateY(' + (x*4) + 'deg)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transition = 'transform .5s ease, border-color .4s, box-shadow .4s';
      card.style.transform  = '';
      setTimeout(function () { card.style.transition = ''; }, 500);
    });
    card.addEventListener('mouseenter', function () {
      card.style.transition = 'border-color .3s, box-shadow .3s';
    });
  });
})();
