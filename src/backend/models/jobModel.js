import mongoose from "mongoose";

const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    responsible: { type: String, required: false },
    phone: { type: String, required: false },
    mail: { type: String, required: false },
    type: { type: String, required: false },
    is_home: { type: Boolean, requeired: false },
    hdIds: { type: [String], required: true },
  },
  { timestamps: true }
);

const Job = mongoose.model("job", jobSchema);

export default Job;
