/* ============================================================
   SHARED JS — ichbintayyab Portfolio
   Loaded by: ALL pages
============================================================ */

/* === CUSTOM CURSOR === */
(function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  var dot  = document.getElementById('cur');
  var ring = document.getElementById('curRing');
  if (!dot || !ring) return;

  var cx = 0, cy = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function (e) {
    cx = e.clientX; cy = e.clientY;
    dot.style.left = cx + 'px';
    dot.style.top  = cy + 'px';
  });

  (function loop() {
    rx += (cx - rx) * .13;
    ry += (cy - ry) * .13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  /* Hover states — selects every interactive element across all pages */
  document.querySelectorAll(
    'a, button, .p-card, .b-card, .skill, .i-card, .skill-cat, ' +
    '.int-card, .proj-item, .info-card, .soc-btn, .blog-featured, .rel-card'
  ).forEach(function (el) {
    el.addEventListener('mouseenter', function () { ring.classList.add('on'); });
    el.addEventListener('mouseleave', function () { ring.classList.remove('on'); });
  });
})();

/* === NAVIGATION SCROLL EFFECT === */
(function initNavScroll() {
  var nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* === MOBILE MENU TOGGLE === */
(function initMobileMenu() {
  var ham = document.getElementById('ham');
  var mob = document.getElementById('mobMenu');
  if (!ham || !mob) return;

  ham.addEventListener('click', function () {
    var open = ham.classList.toggle('open');
    mob.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', String(open));
  });

  mob.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      ham.classList.remove('open');
      mob.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('click', function (e) {
    if (!ham.contains(e.target) && !mob.contains(e.target)) {
      ham.classList.remove('open');
      mob.classList.remove('open');
      ham.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* === SCROLL REVEAL (IntersectionObserver) === */
(function initScrollReveal() {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('in');
    });
  }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.rv').forEach(function (el) { obs.observe(el); });
})();

/* === PAGE HERO INSTANT REVEAL
     Fires on pages that have a .page-hero section (about, projects, blog, contact).
     On index.html the hero uses a different entrance system (heroReveal in index.js). === */
(function initPageHeroReveal() {
  var heroEls = document.querySelectorAll('.page-hero .rv');
  if (!heroEls.length) return;
  heroEls.forEach(function (el) {
    setTimeout(function () {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  });
})();
