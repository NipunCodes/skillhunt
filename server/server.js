import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import jobsRoute from './routes/job.route.js';

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/jobs", jobsRoute);


// Basic route to check server status
app.get("/", (req,res) => {
    res.send("Server is ready");
})


app.listen(5000, ()=> {
    connectDB();
    console.log('Server started at http://localhost:5000');
    
});