import React, { useState,  useEffect, useRef} from 'react';

import { Link} from 'react-router-dom';
import { FaAngleDown, FaBars } from "react-icons/fa";
import Profile from '../assets/img/perfil.jpeg'

export const Navbar = ({ openSidebar, isOpen }) => {
  //Dropdown
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  // Referencia al dropdown
  const dropdownRef = useRef(null); 

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica si el clic fue fuera del dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    };

    // Agrega el event listener para detectar clics fuera
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Limpia el event listener cuando el componente se desmonte
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='shadow-md flex justify-between items-center py-4 mb-4 bg-secondary-100'>
      <div className='ml-4 flex gap-2 items-center'>
      {!isOpen && (
        <FaBars  onClick={openSidebar}
         className='text-lg font-bold text-white cursor-pointer lg:hidden' />)}

        <Link to="/home" className="text-md font-bold text-primary  tracking-[1px] 
        sm:tracking-[3px] sm:text-2xl"
       >JacrNet</Link>
      
      </div>
      <div className='relative mr-4'  ref={dropdownRef}>
        <button className='flex items-center text-white'    onClick={toggleDropdown}>
          <img src= {Profile} alt="profile user" className='h-8 w-8 rounded-full' />
          <span className='ml-2 text-sm hidden sm:block'>Juan Castañeda</span>
          <FaAngleDown />
        </button>

        {isOpenDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-secondary-900 rounded-md shadow-lg">
            <a href="#" className="block px-4 py-2 text-gray-400 hover:bg-secondary-100">
              Perfil
            </a>
            <a href="#" className="block px-4 py-2 text-gray-400 hover:bg-secondary-100">
              Configuración
            </a>
            <a href="#" className="block px-4 py-2 text-gray-400 hover:bg-secondary-100">
              Salir
            </a>
          </div>
        )}

      </div>
    </nav>
  )
}
