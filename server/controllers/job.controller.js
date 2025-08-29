import Jobs from '../models/job.model.js';

// Get all jobs
export const getAllJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find().sort({ createdAt: -1 });
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
export const getJobCountsByCategory = async (req, res) => {
    try {
        const counts = await Jobs.aggregate([
            { $group: { _id: '$jobCategory', count: { $sum: 1 } } }
        ]);
        res.status(200).json(counts);
    } catch (error) {
        console.error('Error getting job counts:', error);
        res.status(500).json({ message: 'Cannot get job counts' });
    }
};

export const createJob = async (req, res) => {
    try {
        const jobData = req.body;
        
        // If there's a file uploaded, add its path to the job data
        if (req.file) {
            jobData.companyPicture = `/uploads/${req.file.filename}`;
        }

        const jobs = await Jobs.create(jobData);
        res.status(201).json(jobs);
    } catch (error) {
        console.error('Error creating job:', error);
        res.status(500).json({ message: 'Cannot create a job', error: error.message });
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
