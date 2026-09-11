/* Rotating carousel for [data-carousel].
   Pure enhancement: without JS the track is a scroll-snap row the user can swipe,
   so every card stays reachable. JS adds auto-advance, arrows and dots. */
(function () {
  if (window.__amdsCarousel) return;
  window.__amdsCarousel = true;

  var INTERVAL = 5200;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init(root) {
    if (root.dataset.carouselReady) return;
    var track = root.querySelector('[data-carousel-track]');
    if (!track) return;
    root.dataset.carouselReady = '1';

    var slides = [].slice.call(track.children);
    if (slides.length < 2) return;

    var dotsWrap = root.querySelector('[data-carousel-dots]');
    var dots = [];
    var i = 0, timer = null;

    function perView() {
      var w = track.getBoundingClientRect().width;
      var sw = slides[0].getBoundingClientRect().width;
      return Math.max(1, Math.round(w / Math.max(1, sw)));
    }

    function pages() { return Math.max(1, Math.ceil(slides.length / perView())); }
    function maxIndex() { return pages() - 1; }

    // Dots are rebuilt whenever the page count changes, so a resize that shows
    // more slides per view does not leave stale dots behind.
    function buildDots() {
      if (!dotsWrap) return;
      var n = pages();
      if (dots.length === n) return;
      dotsWrap.innerHTML = '';
      dots = [];
      for (var k = 0; k < n; k++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'carousel-dot';
        b.setAttribute('aria-label', 'Go to page ' + (k + 1) + ' of ' + n);
        (function (idx) { b.addEventListener('click', function () { go(idx, true); }); })(k);
        dotsWrap.appendChild(b);
        dots.push(b);
      }
    }

    function paint() {
      buildDots();
      var n = Math.min(i, maxIndex());
      var target = slides[Math.min(slides.length - 1, n * perView())];
      // scrollLeft, not transform: the track stays a real scroll container, so
      // touch swiping and keyboard focus scrolling keep working.
      track.scrollTo({ left: target.offsetLeft - slides[0].offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
      dots.forEach(function (d, k) {
        d.setAttribute('aria-current', k === n ? 'true' : 'false');
      });
    }

    function go(n, manual) {
      var m = maxIndex();
      i = n > m ? 0 : (n < 0 ? m : n);
      paint();
      if (manual) restart();
    }

    function next() { go(i + 1); }
    function prev() { go(i - 1); }

    var nb = root.querySelector('[data-carousel-next]');
    var pb = root.querySelector('[data-carousel-prev]');
    if (nb) nb.addEventListener('click', function () { go(i + 1, true); });
    if (pb) pb.addEventListener('click', function () { go(i - 1, true); });

    var noAuto = root.hasAttribute('data-carousel-noauto');

    function start() {
      if (reduce || noAuto || timer) return;
      timer = setInterval(function () {
        if (document.hidden) return;
        next();
      }, INTERVAL);
    }
    function stop() { clearInterval(timer); timer = null; }
    function restart() { stop(); start(); }

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);
    window.addEventListener('resize', paint, { passive: true });

    // Keep the dots honest if the user swipes the track directly.
    var st = null;
    track.addEventListener('scroll', function () {
      clearTimeout(st);
      st = setTimeout(function () {
        var x = track.scrollLeft + slides[0].offsetLeft;
        var best = 0, bd = Infinity;
        slides.forEach(function (s, k) {
          var d = Math.abs(s.offsetLeft - x);
          if (d < bd) { bd = d; best = k; }
        });
        var page = Math.round(best / perView());
        if (page !== i) { i = Math.min(page, maxIndex()); dots.forEach(function (d, k) { d.setAttribute('aria-current', k === i ? 'true' : 'false'); }); }
      }, 140);
    }, { passive: true });

    paint();
    // init can run before the stylesheet applies, when every slide is still
    // full width and perView reads as 1. A ResizeObserver re-paints whenever the
    // real geometry arrives — late CSS, font swap or viewport change alike.
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () { paint(); });
      ro.observe(track);
      ro.observe(slides[0]);
    } else {
      requestAnimationFrame(function () { requestAnimationFrame(paint); });
      window.addEventListener('load', paint);
    }
    start();
  }

  function scan() { document.querySelectorAll('[data-carousel]').forEach(init); }

  var scanTimer = null;
  function scanSoon() {
    clearTimeout(scanTimer);
    scanTimer = setTimeout(scan, 120);
  }

  scan();
  window.addEventListener('load', scan);
  new MutationObserver(scanSoon).observe(document.documentElement, { childList: true, subtree: true });
})();
