import api from './axios';

export const http = {
  fetchData: async (url) => {
    const res = await api.get(url);
    return res.data;
  },
  createData: async (url, data) => {
    const res = await api.post(url, data);
    return res.data;
  },
  updateData: async (url, data) => {
    const res = await api.put(url, data);
    return res.data;
  },
  deleteData: async (url) => {
    const res = await api.delete(url);
    return res.data;
  },
};

export default http;
