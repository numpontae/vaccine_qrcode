import axios from "axios";
//axios.defaults.baseURL = 'http://20.43.147.167/ConsentManagementAPI'
//axios.defaults.baseURL = 'http://10.105.10.46:30052'
axios.defaults.baseURL = "http://23.97.54.119:3000";
axios.defaults.headers.common = {
  "Content-Type": "application/json"
};

export default axios;
