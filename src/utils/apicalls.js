import axios from 'axios';
import {BASE_URL} from "./config";


export const fetchPrevious = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/previous`);
        return response.data;
    } catch (error) {
        console.error('Error fetching previous:', error);
        throw error;
    }
};