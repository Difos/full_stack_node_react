const express = require("express");
const server = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;
 
server.get("/", (req, res) => {
  res.send("welcome to the server");
});
 
server.get("/cursos", (req, res) => {
  res.json({
    Web: "React.js",
    Mobile: "React-Native",
    ML: "Python",
  });
});
server.listen(port);
console.log("listening on port " + port);



