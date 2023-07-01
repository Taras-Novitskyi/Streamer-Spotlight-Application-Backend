const { Streamer } = require("../../models/Streamer");
const { HttpError } = require("../../helpers");

const getStreamerById = async (req, res) => {
  const { streamerId } = req.params;

  const result = await Streamer.findById(streamerId, "-updatedAt -createdAt");

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = getStreamerById;
