const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/peerjs', // تغيير المسار لمنع التعارض
  allow_discovery: true,
  proxied: true // هذا السطر حاسم لعمل السيرفر على Render
});

console.log("SA'ADA Peer Server is running...");
