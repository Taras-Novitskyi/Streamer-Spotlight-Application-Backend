const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { streamerId } = req.params;
  if (!isValidObjectId(streamerId)) {
    next(HttpError(400, `${streamerId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
