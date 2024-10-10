import React, { createContext, useState, useEffect } from 'react';
import { getPlans } from '../service/PlanService';


export const PlansContext = createContext();

export const PlansProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]);


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
    <PlansContext.Provider value={{ plans, loading, error, expandedRows, toggleExpandRow  }}>
      {children}
    </PlansContext.Provider>
  );
};