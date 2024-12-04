import axios from 'axios';

const prodURL = "";
const devURL = "http://192.168.1.60:8000/api";

const api = axios.create({
    baseURL: devURL,
});

export default api;