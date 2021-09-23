const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: '50542'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // 'data' event handler: displays incoming message from server
  conn.on("data", (data) => {
    console.log(data);
  });

  // 'connect' event handler: displays message on connection
  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
  });

  return conn;
};

module.exports = { connect };