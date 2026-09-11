/* Animated counters — enhancement only.

   Non-negotiable: the authored number is already in the HTML and is what the
   element ends on. Nothing is ever hidden, so if this file fails to load, is
   blocked, or the frame loop stalls, the real figure is simply on screen. That
   is why the earlier reveal/counter scripts were removed: they gated content.
*/
(function () {
  if (window.__amdsCounters) return;
  window.__amdsCounters = true;

  var DUR = 1800;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var ease = function (t) { return 1 - Math.pow(1 - t, 3); };

  // A figure worth animating: contains digits, short, and not a date/sentence.
  var FIG = /^([^\d]{0,3})(\d[\d,]*(?:\.\d+)?)([^\d]{0,8})$/;

  function animate(el) {
    if (el.__amdsDone) return;
    var raw = el.textContent.trim();
    var m = raw.match(FIG);
    if (!m) { el.__amdsDone = true; return; }
    el.__amdsDone = true;

    var pre = m[1], numStr = m[2], post = m[3];
    var target = parseFloat(numStr.replace(/,/g, ''));
    if (!isFinite(target) || target === 0) return;
    var dec = (numStr.split('.')[1] || '').length;
    var grouped = numStr.indexOf(',') > -1;

    // Deliberately no width lock: pinning a min-width here measured the element
    // at desktop size and would overflow narrow screens. The figures use tabular
    // numerals, so counting up shifts width only slightly.
    var restore = function () { el.textContent = raw; };
    var t0 = null;
    function frame(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / DUR);
      if (p >= 1) { restore(); return; }
      var v = target * ease(p);
      var out = v.toFixed(dec);
      if (grouped) out = Number(out).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      el.textContent = pre + out + post;
      requestAnimationFrame(frame);
    }
    // Failsafe: whatever happens above, the authored value returns.
    setTimeout(restore, DUR + 800);
    requestAnimationFrame(frame);
  }

  var io = null;
  if (window.IntersectionObserver) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.35 });
  }

  var seen = new WeakSet();
  function scan() {
    var nodes = document.querySelectorAll(
      '.counter-n,.csx-fig,.csx-fig-inline,.prow-v,.num,[data-count],' +
      '.amds-tcg-stats > div > div:first-child'
    );
    Array.prototype.forEach.call(nodes, function (el) {
      if (seen.has(el) || el.__amdsDone) return;
      seen.add(el);
      if (io) io.observe(el); else animate(el);
    });
    // Design-system figures (MetricStrip / StatCard) render their own DOM, so
    // opt in any leaf inside a marked scope that reads as a bare figure.
    document.querySelectorAll('[data-count-scope]').forEach(function (scope) {
      scope.querySelectorAll('div,span,p').forEach(function (el) {
        if (el.children.length || seen.has(el) || el.__amdsDone) return;
        if (!FIG.test(el.textContent.trim())) return;
        seen.add(el);
        if (io) io.observe(el); else animate(el);
      });
    });
  }

  var t = null;
  var queued = function () { clearTimeout(t); t = setTimeout(scan, 120); };
  new MutationObserver(queued).observe(document.documentElement, { childList: true, subtree: true });
  // Scroll and resize must also re-scan: figures that exist after the last DOM
  // mutation settles were never handed to the observer, so scrolling alone
  // never started them. The seen/__amdsDone guards make repeat scans cheap.
  window.addEventListener('scroll', queued, { passive: true });
  window.addEventListener('resize', queued, { passive: true });
  window.addEventListener('load', scan);
  scan();
})();
