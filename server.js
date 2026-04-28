const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/peerjs', 
  allow_discovery: true,
  proxied: true 
});

// التعديل: الـ 3 سطور دول هيردوا على موقع الـ cron-job عشان ما يديش 404
peerServer.get('/', (req, res) => {
  res.status(200).send("SA'ADA Peer Server is Awake!");
});

console.log("SA'ADA Peer Server is running...");
