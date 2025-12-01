import axios from "axios";

const https = axios.create({
    baseURL: "https://flask-model-diabetes-production.up.railway.app/api",
    headers: {
        Accept: "application/json"
    }
})  

export default https;
