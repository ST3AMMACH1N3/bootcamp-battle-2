require("dotenv").config();

const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const db = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`API Server now listening on PORT ${PORT}!`);
    });
    const io = require("socket.io")(server);

    io.on("connection", socket => {
      console.log(`${socket.id} connected`);
      socket.on("test", message => {
        console.log(message);
        socket.emit("test", message);
      });
    });
  })
  .catch(err => console.log(err));
