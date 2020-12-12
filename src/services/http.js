import axios from 'axios';



export const fetchUsers = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}

export const fetchUserPost = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return data;
}