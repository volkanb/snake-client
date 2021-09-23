const { IP, PORT } = require("./constants");
const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
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
    conn.write('Name: VOL');
  });

  return conn;
};

module.exports = { connect };