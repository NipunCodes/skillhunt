import api from '../api/axios';
import http from '../api/http';

// Creating a job service
export const createJob = async (jobData) => {
  return await http.createData('/jobs', jobData);
};

// Fetching all jobs service
export const getAllJobs = async () => {
  return await http.fetchData('/jobs');
};

// Fetch job using ID
export const getJobById = async (id) => {
  return await http.fetchData(`/jobs/${id}`);
};
