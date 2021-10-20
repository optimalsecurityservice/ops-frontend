import axios from 'axios';
export const baseUrl = "https://ops-email-system.herokuapp.com";

export default axios.create({
    baseURL: `${baseUrl}`
});