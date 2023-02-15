const mongoose = require("mongoose");

const URI =
  process.env.NODE_ENV === "production"
    ? process.env.DB_STRING_PROD
    : process.env.DB_STRING;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: `DealershipDB`,
  });

  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
} catch (error) {
  console.log(error);
  process.exit(1); // Exit the process with error (1)
}
