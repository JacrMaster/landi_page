import React, { useState, useContext } from 'react';
import { PlansContext } from '../../context/PlansContext';
import { IoMdClose } from "react-icons/io";

export const PlanForm = () => {
  const { addPlan, closeModal} = useContext(PlansContext); // Obtener la función para añadir un plan

  const [plan, setPlans] = useState({
    name: '',
    price: '',
    installationPrice: '',
    description: ''
  });

  const [error, setError] = useState('');

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setPlans({
      ...plan,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPlan(plan); // Llamar la función para guardar el plan
      setPlans({
        name: '',
        price: '',
        installationPrice: '',
        description: ''
      });
      setError(''); // Limpiar cualquier error
    } catch (err) {
      setError('Hubo un error al guardar el plan. Intenta nuevamente.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-baseline gap-5 justify-center  z-50">
      <div className="bg-secondary-100 p-3 rounded-lg shadow-lg max-w-md w-full absolute top-10">
        <div className='flex justify-between'>
          <h2 className="text-xl font-bold mb-4">Planes</h2>
          <IoMdClose onClick={closeModal}
            className="text-white text-xl  cursor-pointer hover:text-lg" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-200">
                Nombre Plan
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  value={plan.name}
                  onChange={handleChange}
                  required
                  className="block w-full border-0 px-3.5 py-2 bg-secondary-900  outline-none rounded-lg"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-200">
                Precio
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="price"
                  value={plan.price}
                  onChange={handleChange}
                  required
                  className="'block w-full border-0 px-3.5 py-2 bg-secondary-900  outline-none rounded-lg"
                />
              </div>
            </div>
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-200">
                Precio de instalación
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="installationPrice"
                  onChange={handleChange}
                  required
                  className="block w-full border-0 px-3.5 py-2 bg-secondary-900  outline-none rounded-lg"
                />
              </div>
            </div>

          </div>
          <div className='py-6'>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-200">
              Descripción
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="description"
                value={plan.description}
                onChange={handleChange}
                required
                className="block w-full border-0 px-3.5 py-2 bg-secondary-900  outline-none rounded-lg"
              />
            </div>
          </div>
          <button
            type="submit"
            className="p-1 bg-primary  text-white  transition-colors   w-32 rounded-sm mt-6"
          >
            Guardar
          </button>
          <button
            onClick={closeModal}
            type="button"
            className="p-1 bg-white  text-black  transition-colors   w-32 rounded-sm mt-6 ml-3">
            Cerrar
          </button>
        </form>

      </div>
    </div>
  )
}
