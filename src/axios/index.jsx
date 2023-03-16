import axios from 'axios';  

export default axios.create({ 
  baseURL: "https://haji-travel-bk.onrender.com/api", //for production mode 
  // baseURL: "http://localhost:8000/api", //for developement mode 
  headers: {
    "Content-type": "application/json",
  }
});
