/* ============================================================
   BLOG ARTICLE JS — ichbintayyab Portfolio
   Loaded by: pages/blog1.html, blog2.html, blog3.html, blog4.html
============================================================ */

/* === READING PROGRESS BAR === */
(function initProgressBar() {
  var prog = document.getElementById('prog');
  if (!prog) return;
  window.addEventListener('scroll', function () {
    var h   = document.documentElement;
    var pct = window.scrollY / (h.scrollHeight - h.clientHeight) * 100;
    prog.style.width = pct + '%';
  }, { passive: true });
})();
