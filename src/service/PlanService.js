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

export const savePlan = async (planData) => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.post(`${API_URL}/add`, planData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Error al guardar el plan');
  }
};

export const deletePlan = async (id) => {
  const token = localStorage.getItem('token'); // Recupera el token de localStorage

  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`, // Agrega el token en el encabezado de autorización
        'Content-Type': 'application/json',
      },
    });

    return response.data; // Retorna la respuesta en caso de éxito
  } catch (error) {
    throw error;
  }
};