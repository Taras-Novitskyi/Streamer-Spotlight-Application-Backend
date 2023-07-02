const { Streamer } = require("../models/Streamer");

const sockets = (socket) => {
  socket.on("get-streamers", async (callback) => {
    try {
      const streamers = await Streamer.find();
      callback({
        status: "OK",
        streamers,
      });

      socket.broadcast.emit("updated-streamers", streamers);
      socket.emit("updated-streamers", streamers);
    } catch (error) {
      callback({
        status: "NOK",
        error,
      });
    }
  });
};

module.exports = sockets;
