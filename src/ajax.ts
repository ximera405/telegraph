import axios from 'axios';

const DEV = 'https://api.telegra.ph/';
const PROD = window.location.pathname;

export const baseURL = DEV;
export const instance = axios.create({
    baseURL,
    timeout: 60000,
});
