const { Streamer } = require("../../models/Streamer");
const { HttpError } = require("../../helpers");

const updateStreamerRating = async (req, res) => {
  const { streamerId } = req.params;
  const { upvotes, downvotes } = req.body;

  console.log(streamerId, upvotes, downvotes);

  const result = await Streamer.findById(streamerId, "-updatedAt -createdAt");

  if (!result) {
    throw HttpError(404, "Not found");
  }

  const updatedUpvotes = result.upvotes + Number(upvotes);
  const updatedDownvotes = result.downvotes + Number(downvotes);

  const updatedStreamer = await Streamer.updateOne(
    { _id: streamerId },
    { upvotes: updatedUpvotes, downvotes: updatedDownvotes }
  );

  res.json(updatedStreamer);
};

module.exports = updateStreamerRating;
