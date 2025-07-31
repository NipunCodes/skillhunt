import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type: String,
        required: true
    },
    shortDescription:{
        type: String,
        required: true
    },
    jobDescription:{
        type: String,
        required: true
    },
    jobCategory:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
}, {
    timestamps: true //createdAt, updatedAt
});

const Job = mongoose.model('Job',jobSchema);

export default Job;