const { Schema, model } = require("mongoose");
const Joi = require("joi");

const streamerSchema = new Schema(
  {
    name: String,
    platform: String,
    description: String,
    avatar: String,
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const streamer = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "name is a required field" }),
  platform: Joi.string()
    .required()
    .messages({ "any.required": "platform is a required field" }),
  description: Joi.string()
    .required()
    .messages({ "any.required": "description is a required field" }),
  avatar: Joi.string(),
  upvotes: Joi.string(),
  downvotes: Joi.string(),
});

const schemas = {
  streamer,
};

const Streamer = model("streamer", streamerSchema);

module.exports = {
  Streamer,
  schemas,
};
