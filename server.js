const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionSting =
  "mongodb+srv://farpistudent1_db_user:XGVNYTiRsPR7kbZp@cluster0.y0cuoy5.mongodb.net/Reja";

mongodb.connect(
  connectionSting,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection secceed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port : ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
