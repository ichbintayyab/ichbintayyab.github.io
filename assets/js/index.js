/* ============================================================
   INDEX PAGE JS — ichbintayyab Portfolio
   Loaded by: index.html only (after Three.js CDN and shared.js)
============================================================ */

/* === LOADER === */
(function initLoader() {
  var loader  = document.getElementById('loader');
  var ldLogo  = document.getElementById('ldLogo');
  var ldFill  = document.getElementById('ldFill');
  if (!loader) return;

  /* Animate logo in */
  setTimeout(function () {
    ldLogo.style.opacity   = '1';
    ldLogo.style.transform = 'translateY(0)';
  }, 150);

  /* Fill progress bar */
  setTimeout(function () { ldFill.style.width = '100%'; }, 300);

  /* Dismiss loader, then start hero */
  setTimeout(function () {
    loader.style.transition = 'opacity .55s ease';
    loader.style.opacity = '0';
    setTimeout(function () {
      loader.style.display = 'none';
      heroReveal();
    }, 550);
  }, 1600);
})();

/* === HERO ENTRANCE ANIMATION === */
function heroReveal() {
  var seq = [
    { sel: '.h-badge',       delay:  80 },
    { sel: '.h-name',        delay: 200 },
    { sel: '.h-sub',         delay: 330 },
    { sel: '.h-typing-wrap', delay: 430 },
    { sel: '.h-desc',        delay: 540 },
    { sel: '.h-actions',     delay: 650 },
    { sel: '.hero-visual',    delay: 350 },
    { sel: '#scrollInd',     delay: 1000 },
  ];
  seq.forEach(function (item) {
    var el = document.querySelector(item.sel);
    if (!el) return;
    setTimeout(function () {
      el.style.transition = 'opacity .8s ease, transform .8s ease';
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    }, item.delay);
  });
  setTimeout(typeStart, 550);
}

/* === TYPING EFFECT === */
var WORDS = ['Frontend Developer', 'Python Developer', 'Sketch Artist'];
var wi = 0, ci = 0, isDeleting = false;
var tyEl = document.getElementById('typingEl');

function typeStart() { if (tyEl) tick(); }

function tick() {
  var w = WORDS[wi];
  if (!isDeleting) {
    tyEl.textContent = w.substring(0, ++ci);
    if (ci === w.length) { isDeleting = true; setTimeout(tick, 1900); return; }
  } else {
    tyEl.textContent = w.substring(0, --ci);
    if (ci === 0) { isDeleting = false; wi = (wi + 1) % WORDS.length; setTimeout(tick, 420); return; }
  }
  setTimeout(tick, isDeleting ? 48 : 88);
}

/* === THREE.JS NEURAL NETWORK HERO BACKGROUND === */
(function initHero3D() {
  var canvas = document.getElementById('heroCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  var W = window.innerWidth, H = window.innerHeight;
  var scene    = new THREE.Scene();
  var camera   = new THREE.PerspectiveCamera(60, W / H, .1, 200);
  camera.position.z = 30;

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /* Particle data */
  var N = window.innerWidth < 768 ? 55 : 95;
  var pts = [];
  for (var i = 0; i < N; i++) {
    pts.push({
      x:  (Math.random() - .5) * 60,
      y:  (Math.random() - .5) * 40,
      z:  (Math.random() - .5) * 10,
      vx: (Math.random() - .5) * .018,
      vy: (Math.random() - .5) * .014
    });
  }

  /* Point cloud */
  var pGeo = new THREE.BufferGeometry();
  var pPos = new Float32Array(N * 3);
  pts.forEach(function (p, idx) { pPos[idx*3]=p.x; pPos[idx*3+1]=p.y; pPos[idx*3+2]=p.z; });
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  var pMat = new THREE.PointsMaterial({ color: 0x4f7df7, size: .28, transparent: true, opacity: .85, sizeAttenuation: true });
  scene.add(new THREE.Points(pGeo, pMat));

  /* Line segments */
  var MAXL = 220;
  var lPos = new Float32Array(MAXL * 6);
  var lGeo = new THREE.BufferGeometry();
  lGeo.setAttribute('position', new THREE.BufferAttribute(lPos, 3));
  lGeo.setDrawRange(0, 0);
  var lMat = new THREE.LineBasicMaterial({ color: 0x4f7df7, transparent: true, opacity: .15 });
  scene.add(new THREE.LineSegments(lGeo, lMat));

  var mx = 0, my = 0;
  window.addEventListener('mousemove', function (e) {
    mx = (e.clientX / window.innerWidth  - .5);
    my = -(e.clientY / window.innerHeight - .5);
  });

  function animate() {
    requestAnimationFrame(animate);
    var lc = 0;
    for (var i = 0; i < N; i++) {
      var p = pts[i];
      p.x += p.vx + mx * .008;
      p.y += p.vy + my * .006;
      if (Math.abs(p.x) > 30) p.vx *= -1;
      if (Math.abs(p.y) > 20) p.vy *= -1;
      pPos[i*3] = p.x; pPos[i*3+1] = p.y; pPos[i*3+2] = p.z;
      if (lc < MAXL) {
        for (var j = i + 1; j < N && lc < MAXL; j++) {
          var q = pts[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          if (dx*dx + dy*dy < 64) {
            var k = lc * 6;
            lPos[k]=p.x; lPos[k+1]=p.y; lPos[k+2]=p.z;
            lPos[k+3]=q.x; lPos[k+4]=q.y; lPos[k+5]=q.z;
            lc++;
          }
        }
      }
    }
    pGeo.attributes.position.needsUpdate = true;
    lGeo.attributes.position.needsUpdate = true;
    lGeo.setDrawRange(0, lc * 2);
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', function () {
    var W = window.innerWidth, H = window.innerHeight;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  });
})();

/* === MARQUEE BUILDER === */
(function buildMarquee() {
  var items = [
    { icon: 'fab fa-html5',          label: 'HTML5' },
    { icon: 'fab fa-css3-alt',       label: 'CSS3' },
    { icon: 'fab fa-js',             label: 'JavaScript' },
    { icon: 'fab fa-python',         label: 'Python' },
    { icon: 'fas fa-wind',           label: 'Tailwind CSS' },
    { icon: 'fab fa-git-alt',        label: 'Git' },
    { icon: 'fas fa-brain',          label: 'AI / ML' },
    { icon: 'fas fa-pencil',         label: 'Sketch Art' },
    { icon: 'fas fa-mobile-screen',  label: 'Responsive' },
    { icon: 'fas fa-terminal',       label: 'CLI Tools' },
  ];
  var track = document.getElementById('mqTrack');
  if (!track) return;
  /* Duplicate 4× for seamless infinite loop */
  var full = items.concat(items, items, items);
  track.innerHTML = full.map(function (it) {
    return '<span class="mq-item"><i class="' + it.icon + '" aria-hidden="true"></i>' + it.label +
           '<span class="mq-dot" aria-hidden="true"></span></span>';
  }).join('');
})();

/* === MAGNETIC BUTTONS === */
(function initMagnetic() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.mag').forEach(function (btn) {
    btn.addEventListener('mousemove', function (e) {
      var r = btn.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width  / 2) * .22;
      var y = (e.clientY - r.top  - r.height / 2) * .28;
      btn.style.transform = 'translate(' + x + 'px,' + y + 'px) translateY(-2px)';
    });
    btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
  });
})();

/* === 3D CARD TILT — homepage project cards === */
(function initTilt() {
  if (window.matchMedia('(hover: none)').matches) return;
  document.querySelectorAll('.tilt').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width  - .5;
      var y = (e.clientY - r.top)  / r.height - .5;
      card.style.transform = 'perspective(800px) rotateX(' + (-y*7) + 'deg) rotateY(' + (x*7) + 'deg) translateY(-8px)';
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
