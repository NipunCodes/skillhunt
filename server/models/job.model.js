import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    category:{
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