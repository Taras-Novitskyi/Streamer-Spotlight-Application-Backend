const { Schema, model } = require("mongoose");
const Joi = require("joi");

const streamerSchema = new Schema(
  {
    name: String,
    platform: String,
    description: String,
    avatar: String,
    upvotes: { type: [Schema.Types.String], default: [] },
    downvotes: { type: [Schema.Types.String], default: [] },
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
  upvotes: Joi.array().items(Joi.string()),
  downvotes: Joi.array().items(Joi.string()),
});

const schemas = {
  streamer,
};

const Streamer = model("streamer", streamerSchema);

module.exports = {
  Streamer,
  schemas,
};
