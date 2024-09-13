import { Link} from 'react-router-dom';
import { FaAngleDown, FaBars } from "react-icons/fa";
import Profile from '../assets/img/perfil.jpeg'

export const Navbar = ({ openSidebar, isOpen }) => {
  
  return (
    <nav className='shadow-md flex justify-between items-center py-4 mb-6 bg-secondary-100'>
      <div className='ml-4 flex gap-2 items-center'>
      {!isOpen && (
        <FaBars  onClick={openSidebar}
         className='text-lg font-bold text-white cursor-pointer lg:hidden' />)}

        <Link to="/home" className="text-md font-bold text-primary  tracking-[1px] 
        sm:tracking-[3px] sm:text-2xl"
       >JacrNet</Link>
      
      </div>
      <div className='relative mr-4'>
        <button className='flex items-center text-white'>
          <img src= {Profile} alt="profile user" className='h-8 w-8 rounded-full' />
          <span className='ml-2 text-sm hidden sm:block'>Juan Castañeda</span>
          <FaAngleDown />
        </button>
      </div>
    </nav>
  )
}
