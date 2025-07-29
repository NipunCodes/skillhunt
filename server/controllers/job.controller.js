import Jobs from '../models/job.model.js';

// Get all jobs
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find({})
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Cannot get jobs' });
    }
};

// Get a job by ID
export const getJobById = async (req, res) => {
    try {
        const {id} = req.params;
        const job = await Jobs.findById(id);
        res.status(200).json(job);
    } catch (error) {
        res.status(500).json({ message : 'Cannot find job'})
    }
};

// Create a job
export const createJob = async (req, res) => {
    try {
        const jobs = await Jobs.create(req.body);
        res.status(201).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Cannot create a job' });
    }
};

// Update a job
export const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Jobs.findByIdAndUpdate(id, req.body);

        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        const updateJob = await Jobs.findById(id);
        res.status(200).json(updateJob);

    } catch (error) {
        res.status(500).json({ message: 'Cannot update job' });
    }
};

// Delete a job
export const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Jobs.findByIdAndDelete(id);

        if (!job) {
            return res.status(404).json({ message: 'Job Cannot find' });
        }

        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Cannot delete job' });
    }
};
