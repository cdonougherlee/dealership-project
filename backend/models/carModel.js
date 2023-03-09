const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Please add a brand"],
    },
    model: {
      type: String,
      required: [true, "Please add a model"],
    },
    colour: {
      type: String,
      required: [true, "Please add a colour"],
    },
    trim: {
      type: String,
      required: [true, "Please add a trim"],
    },
    options: {
      type: Array,
      default: new Array(),
      of: Object,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Please add an owner"],
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("Car", CarSchema);
