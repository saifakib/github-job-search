import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jobs.github.com/positions.json'
})

instance.defaults.headers.common["Access-Control-Allow-Origin","Access-Control-Allow-Headers"] = ["*","Origin, X-Requested-With, Content-Type, Accept"];


export default instance;
