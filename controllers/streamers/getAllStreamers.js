const { Streamer } = require("../../models/Streamer");
const { HttpError } = require("../../helpers");

const getAllStreamers = async (req, res) => {
  const data = await Streamer.find();

  res.json(data);
};

module.exports = getAllStreamers;
