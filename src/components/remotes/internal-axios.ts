import Axios from 'axios';

// eslint-disable-next-line eqeqeq
const server = !process.env.NODE_ENV || process.env.NODE_ENV == 'development' ?
    '' : '';
    // Insert URL when database is established

export const internalAxios = Axios.create({
    baseURL: server
});