if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,a,n)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map(s=>{switch(s){case"exports":return c;case"module":return t;default:return e(s)}})).then(e=>{const s=n(...e);return c.default||(c.default=s),c})}))}}define("./sw.js",["./workbox-68d819e8"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"drFVrPNxbooMfft00cCPB"},{url:"/_next/static/chunks/14.fc19a17a3c50d2eb6d8b.js",revision:"8a4db6353ecc33e421e0df301623185b"},{url:"/_next/static/chunks/15.3e56336a8f4419a1d1a9.js",revision:"d7fb086adbc994b27a5d653a5a8fa4a8"},{url:"/_next/static/chunks/16.57520e426f87faaf9986.js",revision:"215a96fdd3c6389d905e7166c273de1b"},{url:"/_next/static/chunks/17.d341be2c44fd88e17f5f.js",revision:"989253c3f034c46b14d806004b94679e"},{url:"/_next/static/chunks/18.06d68e893017c47c879a.js",revision:"2da8ada7736ac066e7f8454dcc976b9f"},{url:"/_next/static/chunks/19.4dad475ef70d7b50e291.js",revision:"5e62a7bfd390a048550ceefd54471b7b"},{url:"/_next/static/chunks/1d7de3dbcee8cc0ba1441789490f57b5dbab48f4.98fc3bdfc95f2d6cd4a2.js",revision:"4d17a5baa7e4acaa8bbe1c5af87cd9d3"},{url:"/_next/static/chunks/20.beb5ba1e279f915a56c2.js",revision:"9553fbafef265cff7e7335bed5fd38e3"},{url:"/_next/static/chunks/21.ad783dc0737465d39878.js",revision:"74abd0ad3ba4936e32d505b66a3b456d"},{url:"/_next/static/chunks/23.dfaf21539213939fdbcd.js",revision:"a906abb1900e5cc7ea8dbc9cb4c132e5"},{url:"/_next/static/chunks/24.8b3f14195a1b32b895a9.js",revision:"1db1c326e68f7f1b25adbd95f12b3a4e"},{url:"/_next/static/chunks/25.dd2773f4210b0754dba0.js",revision:"1a728d645ed71ec8f276a23ee3bc9f00"},{url:"/_next/static/chunks/26.3ea9eaa97288e224db7c.js",revision:"df3ee9865f6f302cca77278e33154918"},{url:"/_next/static/chunks/27.88d13ca7d52df186d81a.js",revision:"7a2664fa1ce4c29c11eefbb19ec3d505"},{url:"/_next/static/chunks/28.7b64e93aa2499b251b2f.js",revision:"25bd53da962ee45358d08f3fb2344bc0"},{url:"/_next/static/chunks/29.fef65305f2c54c1dd18d.js",revision:"76ff08273b8b263a4ba27c66dba06f31"},{url:"/_next/static/chunks/30.5685245ed1438313f44e.js",revision:"609ecdb5e2dc6e4cba25837cad586685"},{url:"/_next/static/chunks/32.896918667d5d2da97230.js",revision:"1eb0fc987dd3d94c3607845cdd974b29"},{url:"/_next/static/chunks/33.641ab16d01365d79c3e7.js",revision:"ea2c6835408733fdf7988ec3f4d20e94"},{url:"/_next/static/chunks/34.ed3ed62261122af17c6f.js",revision:"dd61ef7fa2a594df5ec8c834e7c7f225"},{url:"/_next/static/chunks/6e718a903d2b2e8e5adbb27243021d89c3092835.34b68ba7c659026c3f03.js",revision:"9ecbadf1d5ebd8d372ecbe2f5138ab42"},{url:"/_next/static/chunks/95b64a6e.61be7035ee51a27e0c8f.js",revision:"39b438863b8f12152a9433714303279c"},{url:"/_next/static/chunks/9c52c29b96d2a801339ded4fe12325569159951c.f8d643d44c87834c4908.js",revision:"23d35744058e4b4ae87081c763ad978c"},{url:"/_next/static/chunks/aa7211ef10ddeeb2b5b69fd333f2710cede69d3c.c49c2f536419f0131c2b.js",revision:"155bb79f45e93a2641b05e54565086b6"},{url:"/_next/static/chunks/framework.0b4be297c21d0ce43521.js",revision:"eb43b99838b43eb618bfe5a78ab7985a"},{url:"/_next/static/chunks/main-8018b88270a6c48a0848.js",revision:"f592197a282ed4a8a94d68e5cc26254e"},{url:"/_next/static/chunks/pages/_app-4e75ad3ccd5ef43a8084.js",revision:"3e596003a86b65b9c0726e048de30192"},{url:"/_next/static/chunks/pages/_error-db917322d4163ff51674.js",revision:"37d7246a9e710b60c84e43d7a64a8ba2"},{url:"/_next/static/chunks/pages/icons-73e20bb1b5cac3242b87.js",revision:"504479c2e0e9651b2f02857a073af823"},{url:"/_next/static/chunks/pages/index-c3feb7714649d0186eea.js",revision:"57f6ffce32eaa27134e3c12ce05f6105"},{url:"/_next/static/chunks/pages/search-9342f5209c4739cf04b4.js",revision:"7f2fc9369ea792394a635e66e6a9e4d6"},{url:"/_next/static/chunks/polyfills-83732ebf2ed7f8a1b2c7.js",revision:"1e875a6bcb0993effb274df712fd9a46"},{url:"/_next/static/chunks/webpack-eb54c701bce8aeb7f8d6.js",revision:"93ca649d15df0ec779908250d152b156"},{url:"/_next/static/css/1009036a2dda9336ffb5.css",revision:"b449f03cc87190c481c003b68456a8ff"},{url:"/_next/static/drFVrPNxbooMfft00cCPB/_buildManifest.js",revision:"94f2d1506cfbf613bcf6e4cbf9c6c0ab"},{url:"/_next/static/drFVrPNxbooMfft00cCPB/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));