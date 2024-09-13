import { Link} from 'react-router-dom';
import { FaHouseUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Sidebar = ({ isOpen , closeSidebar}) => {

  return (
    <div className={`fixed lg:static inset-y-0 left-0 w-64 bg-black text-white transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0 transition-transform duration-300 ease-in-out`}>

      <IoMdClose  onClick={closeSidebar}
      className="text-white absolute left-56 top-3 cursor-pointer lg:hidden hover:text-lg"/>
      <div className="px-4 py-10 overflow-y-auto">
        <ul className="space-y-4 font-medium">
          <li>
            <Link to="/" 
            className = "flex items-center rounded-lg p-2 text-white border-primary border-2  hover:bg-primary transition-colors">
              <FaHouseUser />
              <span className="ms-3">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/" 
            className = "flex items-center rounded-lg p-2 text-white hover:bg-primary transition-colors">
              <FaHouseUser />
              <span className="ms-3">Movimientos</span>
            </Link>
          </li>
          <li>
            <Link to="/" 
            className = "flex items-center rounded-lg p-2 text-white hover:bg-primary  transition-colors">
              <FaHouseUser />
              <span className="ms-3">Cuentas</span>
            </Link>
          </li>
          <li>
            <Link to="/" 
            className = "flex items-center rounded-lg p-2 text-white hover:bg-primary transition-colors">
              <FaHouseUser />
              <span className="ms-3">Clientes</span>
            </Link>
          </li>
          <li>
            <Link to="/" 
            className = "flex items-center rounded-lg p-2 text-white hover:bg-primary transition-colors">
              <FaHouseUser />
              <span className="ms-3">Servicios</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


