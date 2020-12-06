import axios from 'axios';

const url = 'https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users';

export const fetchUsers = async () => {
    const response = await axios.get(`${url}`).then(res => res.data);
    return response;
}

export const fetchUserById = async (id) => {
    const response = await axios.get(`${url}/${id}`).then(res => res.data);
    return response;
}

export const fetchPosts = async (id) => {
    const response = await axios.get(`${url}/${id}/posts`).then(res => res.data);
    return response;
}

export const createPost = async ({ ...item }, id) => axios.post(`${url}/${id}/posts`, { ...item}).then(res => res.data);