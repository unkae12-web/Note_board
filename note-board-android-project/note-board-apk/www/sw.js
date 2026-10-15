// 오프라인에서도 열리게 파일을 저장해 두는 서비스 워커
// index.html 등을 고쳐서 다시 올렸다면 아래 V 숫자를 올려 주세요 (설치된 앱이 새 버전으로 바뀝니다).
const V='nb-v3';
const FILES=['./','index.html','manifest.webmanifest','favicon.svg','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;
 if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin)return;
 e.respondWith(caches.open(V).then(async c=>{
  const hit=await c.match(r,{ignoreSearch:true});
  const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res}).catch(()=>null);
  e.waitUntil(net);
  return hit||net.then(res=>res||c.match('index.html'));
 }));
});
