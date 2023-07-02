const { Streamer } = require("../models/Streamer");

const sockets = (socket) => {
  socket.on("get-streamers", async () => {
    try {
      const streamers = await Streamer.find();
      socket.broadcast.emit("updated-streamers", streamers);
      socket.emit("updated-streamers", streamers);
    } catch (error) {
      new Error(error.message);
    }
  });
};

module.exports = sockets;
