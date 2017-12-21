import axios from 'axios';

const instance = axios.create({
    baseURI: 'http://localhost:8080'
});

if (localStorage.getItem("token")) {
    instance.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem("token");
}else {
    instance.defaults.headers.common['Authorization']
}