import axios from "axios";

const API_URL = 'http://localhost:8080/plans';

export const getPlans = async () => {
	try {
		const token = localStorage.getItem('token');

		const response = await axios.get(`${API_URL}/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
	} catch (error) {
		throw error; 
	}
	
};