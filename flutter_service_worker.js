'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9dbf39d3567fd99cd738c27fd4365d3e",
"index.html": "2b51e83d19953280a31cc057469ba1cc",
"/": "2b51e83d19953280a31cc057469ba1cc",
"main.dart.js": "a5ad9afc540608c954f62688831899fc",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c249140f2335903f13efa00136375183",
"assets/AssetManifest.json": "d7a73b62ecf8710f4cd04a55dfe6b8ce",
"assets/NOTICES": "93b1617638f0b12429d510470c44f8d1",
"assets/FontManifest.json": "3b2fb2cf1a4441ab2df652e0de9bacfe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "2680264ceba164be457ff4ed353355a0",
"assets/fonts/MaterialIcons-Regular.otf": "73503865d8f8b9dd56bd0a898786a7da",
"assets/assets/images/ic_twitter.svg": "20c00dcf4799401bfd96b42ea49183d8",
"assets/assets/images/img_mobile.png": "05f557f4d71dbf6d95c54e7fb12dd3ef",
"assets/assets/images/ic_facebook.svg": "0df01fae1b53de5fec3505907de426ce",
"assets/assets/images/ic_hidden_password.svg": "dcdfc6d825478dff1e65012a3fe852a5",
"assets/assets/images/ic_reddit.svg": "8f6a726589dafa0ce79725ce1a693352",
"assets/assets/images/mobile_bg.png": "2a822161c4236bf9b50112c93f365812",
"assets/assets/images/ic_crown.svg": "cd96e7968e12e950510cb6f712a62670",
"assets/assets/images/img_card.png": "7fddac7a332c4be5e3580939ab232c30",
"assets/assets/images/ic_arrow_right.svg": "e30af124c620e81aec6c48f805d2f469",
"assets/assets/images/ic_eye.svg": "db3c30fb59cb995bd9428d15446814c9",
"assets/assets/images/pre_sale_bg.png": "a6ae75653fad8ea3f70bd93a6135a186",
"assets/assets/images/ic_design.svg": "66eb2c369ebb952340d5222f2b977778",
"assets/assets/images/ic_arrow_down.svg": "50157f4b66f4e8e18000c8728f397e68",
"assets/assets/images/ic_logo.svg": "650894c3f1cb0fa88b037bb78e1cc1f6",
"assets/assets/images/ic_astric.svg": "823ba531850b2717ca123e6fe16bd009",
"assets/assets/images/bg_big_card.png": "fb8fbc0f9fb344167f1d0d1064be8bc2",
"assets/assets/images/ic_medium.svg": "02d209e00c149b87e2566a87c51f16f8",
"assets/assets/images/img_mobile_hand.png": "826de44a5612e6bce4a8c2b914d9c435",
"assets/assets/images/logo.svg": "8c9cc7e8122ca002158664f035955463",
"assets/assets/images/ic_github.svg": "2c91307c85ee732b41d4f709d3c37eab",
"assets/assets/images/bg.png": "8887adf84a4a84794bb1f0232f74156c",
"assets/assets/images/ic_instagram%2520.svg": "822803c514a008e06a980ef4fa241a3e",
"assets/assets/fonts/Jost-Bold.ttf": "67d4fe2602174cb3c97346ce2b391a60",
"assets/assets/fonts/GOTHICB.ttf": "bc420c1c2b98e2ee8b2a75c1ce1fe083",
"assets/assets/fonts/HankenGrotesk-Medium.ttf": "c5b0b9b7011812c69f0e876182536930",
"assets/assets/fonts/HankenGrotesk-Bold.ttf": "61097ecff9db3db742c750486eba0c5d",
"assets/assets/fonts/manrope.regular.otf": "93bcdc811b863241e3c2f2472764c5c5",
"assets/assets/fonts/manrope.semibold.otf": "809e36f11861afe527bda8afa0cce855",
"assets/assets/fonts/Jost-Medium.ttf": "01d92baf00ccba044b49ca4e0db57265",
"assets/assets/fonts/manrope.medium.otf": "313854186f7ab99de7ff2cd3a229435e",
"assets/assets/fonts/GOTHIC.ttf": "8917856b57da55472606a59f43b41588",
"assets/assets/fonts/HankenGrotesk-SemiBold.ttf": "adf5a260825f6635b750c6ee14eebc4c",
"assets/assets/fonts/HankenGrotesk-Regular.ttf": "e94ea86690059e4c488a9a8cb789ba2f",
"assets/assets/fonts/manrope.bold.otf": "b2d6510428ad33823191bc451621d1a8",
"assets/assets/fonts/Jost-SemiBold.ttf": "05f7115c8a623b537852e7425c3fc019",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
