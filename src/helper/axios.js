import axios from 'axios';


let url = `${process.env.REACT_APP_API_BASE_URL}`

let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',

}


axios.defaults.headers = headers;

const httpClient = axios.create({ baseURL: url });

export default httpClient
