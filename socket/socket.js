const { Streamer } = require("../models/Streamer");

const sockets = (socket) => {
  console.log("user conect");

  socket.on("get-streamers", async (callback) => {
    try {
      const streamers = await Streamer.find();
      socket.broadcast.emit("updated-streamers", streamers);
      socket.emit("updated-streamers", streamers);

      //   callback({
      //     status: "OK",
      //     streamers,
      //   });
    } catch (error) {
      //   callback({
      //     status: "NOK",
      //   });
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
};

module.exports = sockets;
