import express from "express";
import Job from "../controllers/jobController.js";

const jobRoutes = express.Router();

jobRoutes.post("/new", Job.createJob);
jobRoutes.put("/update/:id", Job.updateJob);
jobRoutes.delete("/delete/:id", Job.deleteJob);
jobRoutes.get("/locs", Job.getJobs);
jobRoutes.get("/loc/:id", Job.getJobById);

export default jobRoutes;
