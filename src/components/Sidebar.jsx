import { Link,  useLocation} from 'react-router-dom';
import { FaHouseUser, FaMoneyCheckAlt, } from "react-icons/fa";
import { IoMdClose,IoMdPeople, IoMdSettings } from "react-icons/io";

export const Sidebar = ({ isOpen , closeSidebar}) => {
  const location = useLocation();
  return (
    <div className={`fixed lg:static   inset-y-0 left-0 w-64 bg-black text-white transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0  transition-transform duration-300 ease-in-out
   lg:bg-secondary-100  lg:rounded-xl  lg:h-[520px]`}>

      <IoMdClose  onClick={closeSidebar}
      className="text-white absolute left-56 top-3 cursor-pointer lg:hidden hover:text-lg"/>
      <div className="px-4 py-10 overflow-y-auto">
        <ul className="space-y-4 font-medium">
          <li>
            <Link to="/home" onClick={closeSidebar}
             className = {`flex items-center rounded-lg p-2 text-white ${
              location.pathname === '/home' ? 'border-primary border-2' : 'border-0'
            }    hover:bg-primary transition-colors`}>
              <FaHouseUser />
              <span className="ms-3">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/facturacion" onClick={closeSidebar}
            className = {`flex items-center rounded-lg p-2 text-white  ${
              location.pathname === '/facturacion' ? 'border-primary border-2' : 'border-0'
            }  hover:bg-primary transition-colors`}>
            <FaMoneyCheckAlt />
              <span className="ms-3">Facturación</span>
            </Link>
          </li>

          <li>
            <Link to="/clientes" onClick={closeSidebar}
            className = {`flex items-center rounded-lg p-2 text-white  ${
              location.pathname === '/clientes' ? 'border-primary border-2' : 'border-0'
            }  hover:bg-primary transition-colors`}>
              <IoMdPeople />
              <span className="ms-3">Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="/planes" onClick={closeSidebar}
            className = {`flex items-center rounded-lg p-2 text-white  ${
              location.pathname === '/planes' ? 'border-primary border-2' : 'border-0'
            }  hover:bg-primary transition-colors`}>
            <FaMoneyCheckAlt />
              <span className="ms-3">Planes</span>
            </Link>
          </li>
         
          <li>
            <Link to="/configuracion" onClick={closeSidebar}
            className ={`flex items-center rounded-lg p-2 text-white  ${
              location.pathname === '/configuracion' ? 'border-primary border-2' : 'border-0'
            }  hover:bg-primary transition-colors`}>
              <IoMdSettings />
              <span className="ms-3">Configuración</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


