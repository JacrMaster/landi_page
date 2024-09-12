import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // Función para verificar si el token ha expirado
  const isTokenExpired = (token) => {
    if (!token) return true;

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // En segundos
      return decoded.exp < currentTime; // Comparar con el tiempo actual
    } catch (error) {
      return true;
    }
  };

  // Si no hay token o el token ha expirado, redirige a login
  if (!token || isTokenExpired(token)) {
    return <Navigate to="/" />;
  }

  // Si el token es válido, muestra el componente hijo
  return children;
};

