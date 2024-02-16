const NameService = "dna-marketing-V2"

const assets = [
    "/index.html",
    "assests/icon-logo.svg",
    "assests/icon-dev.svg",
    "assests/icon-start.svg",
    "assests/icon-close.svg",
    "assests/icon-logo-footer.svg",
    "js/faq.js",
    "js/index.js",
    "js/MenuNav.js",
    "js/Reval.js",

]

self.addEventListener("install", () => {
    installEvent.waitUntil(
        caches.open(NameService).then(cache => {
          cache.addAll(assets)
        }))
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })