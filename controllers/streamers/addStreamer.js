const { Streamer } = require("../../models/Streamer");
const { HttpError } = require("../../helpers");

const STREAMER_PHOTO_URL =
  "https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png";

const addStreamer = async (req, res) => {
  const newStreamer = await Streamer.create({
    ...req.body,
    avatar: STREAMER_PHOTO_URL,
    upvotes: 0,
    downvotes: 0,
  });

  res.status(201).json(newStreamer);
};

module.exports = addStreamer;
