const express = require('express');
const server = express();

server.use(express.static('build'));

server.listen(5000, function() {
  console.log("SUP FRONT END");
})