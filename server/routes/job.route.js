import express from 'express';
import { getAllJobs, getJobById, createJob, updateJob, deleteJob, getJobCountsByCategory } from '../controllers/job.controller.js';
import { upload } from '../config/multer.js';

const router = express.Router();

router.get("/category/counts", getJobCountsByCategory); // Get job counts by category
router.get("/", getAllJobs); // Get all jobs
router.get("/:id", getJobById); // Get single job by ID
router.post("/createjobform", upload.single('companyPicture'), createJob);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;