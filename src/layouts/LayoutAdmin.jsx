import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/sidebar'
import { Navbar } from '../components/navbar'

export const LayoutAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  }
  return (

    <>
      <Navbar openSidebar={openSidebar} isOpen={isOpen} />
      <div className='flex'>
        <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
        <Outlet />
      </div>
    </>
  )
}
