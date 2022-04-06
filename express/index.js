const express = require("express");
const colors = require("colors");

const server = express();
server.get("/", (req, res) => {
  res.send("Hello World");
});
server.listen(3000, () => {
  console.log("Server on Port 3000 with Express".brightMagenta);
});
