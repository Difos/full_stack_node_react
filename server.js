const express = require("express");
const server = express();
//const dotenv = require("env").config();
//const port = process.env.PORT;


server.use(express.json());
server.use(require('./src/routes'))

server.listen(3002);

//console.log("listening on port " + port);



