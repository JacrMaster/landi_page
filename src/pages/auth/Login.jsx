import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

//icons
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Guarda el token en el localStorage
        navigate('/home'); // Redirige a la página home
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (

    <div className='bg-secondary-100 p-8  rounded-xl shadow-2xl w-auto lg:w-[450px]' >
      <h1 className='text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8 '>
        Iniciar sesión
      </h1>
      {error && <p className='text-red-600'>{error}</p>}
      <form onSubmit={handleLogin} className='mb-4'>

        <div className='relative mb-4'>
          <FaUser className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className='py-3 pl-8 pr-4 px-4 bg-secondary-900 w-full outline-none rounded-lg'
            placeholder='Usuario' />
        </div>

        <div className='relative mb-4'>
          <FaLock className='absolute top-1/2 -translate-y-1/2 left-2' />
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
  )
}
