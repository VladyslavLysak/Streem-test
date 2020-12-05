import axios from 'axios';

const url = 'https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users';

export const fetchUsers = async () => {
    const response = await axios.get(`${url}`).then(res => res.data);
    return response;
}