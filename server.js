console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 - Kirish
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 - bosqich SESSION
// 3 - bosqich Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4 - bosqich Routing codelar
app.get("/hello", function (req, res) {
  res.end("<h1>Hello World by KEVIN</h1>");
});
app.get("/gift", function (req, res) {
  res.end("<h1>Siz sovgalar sahifasidasiz</h1>");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port : ${PORT}`);
});
