const express = require("express");
const ctrl = require("../controllers/streamers");
const { isValidId, validateBody } = require("../middlewares");
const { schemas } = require("../models/Streamer");

const streamersRouter = express.Router();

streamersRouter.get("/streamers", ctrl.getAllStreamers);
streamersRouter.post(
  "/streamers",
  validateBody(schemas.streamer),
  ctrl.addStreamer
);
streamersRouter.get("/streamer/:streamerId", isValidId, ctrl.getStreamerById);
streamersRouter.put(
  "/streamers/:streamerId/vote",
  isValidId,
  ctrl.UpdateStreamerRating
);

module.exports = streamersRouter;
