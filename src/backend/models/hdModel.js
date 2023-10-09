import mongoose from "mongoose";

const Schema = mongoose.Schema;

const hdSchema = new Schema(
  {
    title: { type: String, required: true },
    size: { type: String, required: true },
    code: { type: String, required: true },
    qrcode: { type: String, required: true },
    is_home: { type: Boolean, required: false, default: true },
  },
  { timestamps: true }
);

const Hd = mongoose.model("hd", hdSchema);

export default Hd;
