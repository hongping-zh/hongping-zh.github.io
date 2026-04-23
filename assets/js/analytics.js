(function initGa4() {
  var measurementId = "G-HX64K7DBXC";

  if (!measurementId || measurementId === "G-XXXXXXXXXX") {
    console.warn("[GA4] Measurement ID is not set. Update /assets/js/analytics.js");
    return;
  }

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = window.gtag || gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    send_page_view: true,
    anonymize_ip: true
  });

  var gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(gaScript);
})();
