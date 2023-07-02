const { Streamer } = require("../../models/Streamer");
const { HttpError } = require("../../helpers");

const updateStreamerRating = async (req, res) => {
  const { streamerId } = req.params;
  const { upvotes, downvotes } = req.body;

  const result = await Streamer.findById(streamerId, "-updatedAt -createdAt");

  if (!result) {
    throw HttpError(404, "Not found");
  }

  let updatedUpvotes = result.upvotes;
  let updatedDownvotes = result.downvotes;

  if (upvotes) {
    const isUpvote = result.upvotes.indexOf(upvotes);

    if (isUpvote !== -1) {
      updatedUpvotes = result.upvotes.filter((element) => element !== upvotes);
    } else {
      updatedUpvotes.push(upvotes);
      updatedDownvotes = result.downvotes.filter(
        (element) => element !== upvotes
      );
    }
  }

  if (downvotes) {
    const isDownvote = result.downvotes.indexOf(downvotes);

    if (isDownvote !== -1) {
      updatedDownvotes = result.downvotes.filter(
        (element) => element !== downvotes
      );
    } else {
      updatedDownvotes.push(downvotes);
      updatedUpvotes = result.upvotes.filter(
        (element) => element !== downvotes
      );
    }
  }

  await Streamer.updateOne(
    { _id: streamerId },
    { upvotes: updatedUpvotes, downvotes: updatedDownvotes }
  );

  res.json({
    upvotes: updatedUpvotes,
    downvotes: updatedDownvotes,
  });
};

module.exports = updateStreamerRating;
