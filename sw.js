/* Service worker – cho phép cài app & mở nhanh khi mạng yếu.
   Tăng APP_VERSION trong config.js mỗi lần cập nhật để khách nhận bản mới. */
const CACHE = "xe-ghep-" + (new URL(self.location).searchParams.get("v") || "1");
const SHELL = ["./", "./index.html", "./config.js", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/maskable-512.png",
  "./icons/apple-touch-icon-180.png", "./icons/favicon-64.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;                       // đơn đặt xe (POST) luôn đi thẳng lên mạng
  const url = new URL(req.url);
  if (url.origin !== location.origin) {                   // font Google: cache dần
    if (/fonts\.(googleapis|gstatic)\.com/.test(url.host)) {
      e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
        const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return res;
      }).catch(() => r)));
    }
    return;
  }
  // Trang & config: lấy mạng trước (giá luôn mới), mất mạng thì dùng bản lưu
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("./index.html"))));
});
