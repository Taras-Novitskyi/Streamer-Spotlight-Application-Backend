const { controllersWrapper } = require("../../helpers");
const addStreamer = require("./addStreamer");
const getAllStreamers = require("./getAllStreamers");
const getStreamerById = require("./getStreamerById");
const UpdateStreamerRating = require("./updateStreamerRating");

module.exports = {
  addStreamer: controllersWrapper(addStreamer),
  getAllStreamers: controllersWrapper(getAllStreamers),
  getStreamerById: controllersWrapper(getStreamerById),
  UpdateStreamerRating: controllersWrapper(UpdateStreamerRating),
};
