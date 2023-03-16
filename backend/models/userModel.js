const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a username"],
      unique: true,
    },
    hash: {
      type: String,
      required: [true, "Please add a hash"],
    },
    salt: {
      type: String,
      required: [true, "Please add a salt"],
    },
    prefDealer: {
      type: String,
      required: [true, "Please select a dealership"],
    },
    // cars: [
    //   {
    //     // For future db implementation
    //     // type: Schema.Types.ObjectId,
    //     type: Object,
    //     // ref: "Car",
    //   },
    // ],
    cars: [
      {
        brand: String,
        model: String,
        colour: String,
        trim: String,
        options: Array,
        owner: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

mongoose.model("User", UserSchema);
