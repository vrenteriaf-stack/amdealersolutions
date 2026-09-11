/* Mobile nav toggle.
   The sheet's open state lives as a class on the header, not in a logic class, so
   the nav can be inlined into every page template without per-page state. */
(function () {
  if (window.__amdsNav) return;
  window.__amdsNav = true;
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.burger');
    if (!b) return;
    e.preventDefault();
    var hdr = b.closest('.hdr');
    if (!hdr) return;
    var open = hdr.classList.toggle('nav-open');
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // FAQ accordion. The summary click is handled explicitly because native
  // <details> collapsing is not honoured in every host this page runs in.
  function toggleFaq(el) {
    var item = el.closest('.faq-item');
    if (!item) return;
    if (item.hasAttribute('open')) item.removeAttribute('open');
    else item.setAttribute('open', '');
    var s = item.querySelector('.faq-q');
    if (s) s.setAttribute('aria-expanded', item.hasAttribute('open') ? 'true' : 'false');
  }
  document.addEventListener('click', function (e) {
    var s = e.target.closest && e.target.closest('.faq-q');
    if (!s) return;
    e.preventDefault();
    toggleFaq(s);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var s = e.target.closest && e.target.closest('.faq-q');
    if (!s) return;
    e.preventDefault();
    toggleFaq(s);
  });
})();
