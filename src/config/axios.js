import axios from "axios";
//axios.defaults.baseURL = 'http://127.0.0.1:30020'
axios.defaults.baseURL = 'http://10.105.10.46:30052'
//axios.defaults.baseURL = "http://10.105.10.46:30050";
axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

export default axios;
