/* AM Dealer Solutions measurement hook.
   Inactive until GA_ID is filled in with the GA4 measurement ID (G-XXXXXXXXXX).
   Events: phone_click, email_click, generate_lead (consultation form success). */
(function () {
  var GA_ID = 'G-JFHN4DWF0M';
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
  if (GA_ID) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
  window.amdsTrack = function (name, params) { window.gtag('event', name, params || {}); };
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href^="tel:"],a[href^="mailto:"]') : null;
    if (!a) return;
    var href = a.getAttribute('href');
    window.amdsTrack(href.indexOf('tel:') === 0 ? 'phone_click' : 'email_click', { link_url: href, page_path: location.pathname });
  }, true);
})();
