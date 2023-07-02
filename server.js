const mongoose = require("mongoose");
const httpServer = require("./app");

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    httpServer.listen(PORT);
  })
  .catch((err) => {
    process.exit(1);
  });
