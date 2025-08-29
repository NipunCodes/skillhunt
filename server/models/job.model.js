import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    //Job Details
    jobTitle:{
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
    jobType: {
        type: String,
        required: true,
        enum: ['full-time', 'part-time']
    },
    location:{
        type: String,
        required: true
    },
    // Company Details
    companyName: {
        type: String,
        required: true
    },
    companyPicture: {
        type: String,  // Will store the URL/path to the uploaded image
        required: false
    },
    companyLocation: {
        type: String,
        required: true
    }
}, {
    timestamps: true //createdAt, updatedAt
});

const Job = mongoose.model('Job',jobSchema);

export default Job;