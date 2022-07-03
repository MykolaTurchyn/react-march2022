import axios from 'axios';

let url = {
    baseURL: 'https://jsonplaceholder.typicode.com/users'
}

let axiosInstance = axios.create(url);

const getUsers = () => axiosInstance.get("");
const getUserPosts = (id) => axiosInstance.get(`/${id}/posts`);
export {getUsers,getUserPosts};
