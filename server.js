const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/peerjs', 
  allow_discovery: true,
  proxied: true,
  pingInterval: 5000 // السطر ده هو "النبضة" اللي بتتبعت كل 5 ثواني عشان تمنع قطع الاتصال
});

// السطور دي الخاصة بالغفير (الكرون) عشان يفضل السيرفر صاحي
peerServer.get('/', (req, res) => {
  res.status(200).send("SA'ADA Peer Server is Awake!");
});

console.log("SA'ADA Peer Server is running...");
