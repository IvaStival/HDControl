import mongoose from "mongoose";

const Schema = mongoose.Schema;

const locSchema = new Schema(
  {
    location: { type: String, required: true },
    responsible: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    mail: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

const Localization = mongoose.model("localization", locSchema);

export default Localization;
