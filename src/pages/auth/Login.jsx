import { Link } from 'react-router-dom';
//icons
import { FaUser, FaLock} from "react-icons/fa";

export const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-secondary-100 p-8  rounded-xl shadow-2xl w-auto lg:w-[450px]' >
        <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8 '>
          Iniciar sesión
        </h1>
        <form action="" className='mb-4'>

          <div className='relative mb-4'>
            <FaUser className='absolute top-1/2 -translate-y-1/2 left-2' />
           <input type="text" 
            className='py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg'
            placeholder='Usuario' />
          </div>

          <div className='relative mb-4'>
          <FaLock className='absolute top-1/2 -translate-y-1/2 left-2' />
           <input type="password" 
           className='py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg'
            placeholder='Contraseña' />
          </div>
          <div>
            <button type='submit' 
            className='bg-primary text-white uppercase font-bold text-sm w-full py-3 rounded-lg  transition-colors '>
              Ingresar
            </button>
          </div>
        </form>
        <div className='flex flex-col items-center text-gray-100'>
          <Link to="/" className='hover:text-primary transition-colors'>¿Olvidaste tu Contraseña?</Link>
        </div>
      </div>
    </div>
  )
}
