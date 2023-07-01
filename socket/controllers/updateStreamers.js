const sendUpdatedStreamers = async (socket) => {
  try {
    const streamers = await Streamer.find();
    socket.emit("streamersUpdated", streamers);
  } catch (error) {
    console.log(error);
  }
};
