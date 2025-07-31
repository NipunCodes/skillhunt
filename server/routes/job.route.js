import express from 'express';
import { getAllJobs, getJobById, createJob, updateJob, deleteJob } from '../controllers/job.controller.js';

const router = express.Router();

router.get("/jobpage", getAllJobs);
router.get("/:id", getJobById);
router.post("/createjobform", createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;