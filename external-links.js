(function () {
  function fixLinks() {
    var links = document.querySelectorAll('a[href]');
    var here = window.location.hostname.replace(/^www\./i, '');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute('href');
      if (!href) continue;
      // Absolute http(s) links and protocol-relative links only; skip
      // anchors, mailto:, tel:, javascript: and relative (internal) URLs.
      if (!/^https?:\/\//i.test(href) && href.indexOf('//') !== 0) continue;
      var host;
      try {
        host = new URL(href, window.location.href).hostname.replace(/^www\./i, '');
      } catch (e) {
        continue;
      }
      if (host && host !== here) {
        a.setAttribute('target', '_blank');
        var rel = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
        if (rel.indexOf('noopener') === -1) rel.push('noopener');
        a.setAttribute('rel', rel.join(' '));
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixLinks);
  } else {
    fixLinks();
  }
})();
