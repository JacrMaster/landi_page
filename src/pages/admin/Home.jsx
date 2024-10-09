import React from 'react'

export const Home = () => {
  return (
    <div className='w-full p-4 rounded-xl bg-secondary-100'>
      <div className ="p-5 h-48 mb-4 rounded">
         <p className ="text-2xl sm:text-4xl text-white font-extrabold ">
           Bienvenido Juan Castañeda
         </p>
         <button className="p-1 bg-white text-black hover:bg-primary hover:text-white  transition-colors   w-32 rounded-sm mt-6">
            PERFIL
         </button>
      </div>
    </div>
  )
}
