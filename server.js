const mongoose = require("mongoose");
const httpServer = require("./app");

const { DB_HOST, PORT = 3001 } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    httpServer.listen(PORT, () => {
      console.log("listening on *:3001");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
