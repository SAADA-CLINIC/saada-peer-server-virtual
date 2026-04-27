const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  allow_discovery: true,
});

console.log("SA'ADA Peer Server is running...");
