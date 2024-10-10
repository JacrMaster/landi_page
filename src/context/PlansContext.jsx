import React, { createContext, useState, useEffect } from 'react';
import { getPlans, savePlan, deletePlan } from '../service/PlanService';


export const PlansContext = createContext();

export const PlansProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //para expandir fila en la tabla
  const [expandedRows, setExpandedRows] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  const loadPlans = async () => {
    try {
      const data = await getPlans();
      setPlans(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addPlan = async (newPlan) => {
    try {
      const savedPlan = await savePlan(newPlan);
      setPlans((prevPlans) => [...prevPlans, savedPlan]); // Añadir el nuevo plan a la lista
      closeModal();
    } catch (err) {
      setError(err.message);
    }
  };

  const removePlan = async (id) => {
    try {
        await deletePlan(id);
        setPlans((prevPlans) => prevPlans.filter(plan => plan.id !== id)); // Remover el plan del estado
    } catch (err) {
        setError(err.message);
    }
};

  useEffect(() => {
    loadPlans(); // Obtener los planes al cargar el componente
  }, []);

  const toggleExpandRow = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter(rowId => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };
  return (
    <PlansContext.Provider 
    value={{ plans, loading, error, expandedRows, toggleExpandRow, addPlan,  isModalOpen, openModal, closeModal, removePlan }}>
      {children}
    </PlansContext.Provider>
  );
};