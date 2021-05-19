import axios from "axios";

const instance = axios.create({
    baseURL:"https://tinder-backend-raju.herokuapp.com/"
})

export default instance;