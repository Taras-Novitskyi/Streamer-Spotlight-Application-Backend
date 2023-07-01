const express = require("express");
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// const WebSocketServer = new require("ws");
const { Server } = require("socket.io");
const sockets = require("./socket/socket");
const streamersRouter = require("./routes/streamer");
const httpServer = require("http").createServer(app);

const { Streamer } = require("./models/Streamer");

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    // allowedHeaders: ["my-custom-header"],
    // credentials: true,
  },
});

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "public"));

io.on("connection", sockets);

app.use("/", streamersRouter);

app.use((req, res) => {
  console.log(404, req.originalUrl);
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = httpServer;
