import React, { useContext } from 'react';
import { PlansContext } from '../../context/PlansContext';
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa"
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Plans = () => {
  const { plans, loading, error, expandedRows, toggleExpandRow} = useContext(PlansContext);

  if (loading) {
    return <p>Cargando planes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='w-full p-4 rounded-xl bg-secondary-100'>
      <h1>Lista de Planes</h1>
      <div className="w-full flex justify-between items-center mb-3 mt-1">
        <button
          className="p-1 bg-white text-black hover:bg-primary hover:text-white  transition-colors   w-32 rounded-sm mt-6">
          AGREGAR PLAN
        </button>
      </div>

      {plans.length > 0 ? (
        <div className='rounded-lg bg-clip-border shadow-md border  flex flex-col w-full overflow-x-auto'>
          <table className='min-w-full  text-left table-auto'>
            <thead>
              <tr>
                <th className='p-4 border-b border-slate-600 bg-slate-700'>
                  <p className='text-sm font-normal leading-none text-slate-300 '>Item</p>
                </th>
                <th className='p-4 border-b border-slate-600 bg-slate-700'>
                  <p className='text-sm font-normal leading-none text-slate-300'>Nombre</p>
                </th>
                <th className='p-4 border-b border-slate-600 bg-slate-700'>
                  <p className='text-sm font-normal leading-none text-slate-300'>Precio($)</p>
                </th>
                <th className='p-4 border-b border-slate-600 bg-slate-700 hidden md:table-cell'>
                  <p className='text-sm font-normal leading-none text-slate-300'>Precio de Instalación ($)</p>
                </th>
                <th className='p-4 border-b border-slate-600 bg-slate-700 hidden md:table-cell'>
                  <p className='text-sm font-normal leading-none text-slate-300'>Acciones ($)</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <React.Fragment key={plan.id}>
                  <tr>
                    <td className='p-2 border-b border-slate-700 '>
                    <button
                        className="text-md  bg-blue-500/10   p-1 box-content rounded-xl"
                        onClick={() => toggleExpandRow(plan.id)}
                      >
                        {expandedRows.includes(plan.id) ? <IoIosRemoveCircleOutline className='text-red-600' /> : <FaPlus className='text-primary' />}
                      </button>
                    </td>
                    <td className='p-2 border-b border-slate-700'>
                      <p className='text-sm text-slate-100 font-semibold'>{plan.name}</p>
                    </td>
                    <td className='p-4 border-b border-slate-700'>
                      <p className='text-sm text-slate-100 font-semibold'>{plan.price}</p>
                    </td>
                    <td className='p-2 border-b border-slate-700 hidden md:table-cell'>
                      <p className='text-sm text-slate-100 font-semibold'> {plan.installationPrice}</p>
                    </td>
                    <td className='p-2 border-b border-slate-700 hidden md:table-cell '>
                    <div className='flex gap-4 '>
                        <button onClick={() => openDeleteModal(plan.id)}>
                          <FaTrash className="text-md  bg-pink-500/10 text-red-600  p-2 box-content rounded-xl cursor-pointer" />
                        </button>
                        <button>
                          <FaEdit className='text-md  bg-green-500/10 text-green-600  p-2 box-content rounded-xl cursor-pointer' />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedRows.includes(plan.id) && (
                    <tr className="border-t">
                      <td colSpan="5" className="px-4 py-2 bg-secondary-900">
                        <p className='md:hidden'><strong>Precio instalación:</strong> {plan.installationPrice}</p>
                        <p><strong>Descripción:</strong> {plan.description}</p>
                        <div className='flex gap-4 md:hidden flex-row-reverse'>
                          <button onClick={() => openDeleteModal(plan.id)} >
                            <FaTrash className="text-md  bg-pink-500/10 text-red-600  p-2 box-content rounded-xl " />
                          </button>
                          <FaEdit className='text-md  bg-green-500/10 text-green-600  p-2 box-content rounded-xl' />
                        </div>
                      </td>
                    </tr>
                  )}

                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No hay planes disponibles.</p>
      )}
    </div>
  )
}
export default Plans