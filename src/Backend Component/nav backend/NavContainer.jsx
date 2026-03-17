import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import NavAlertProfile from "./NavAlertProfile";
import NavBarBand from "./NavBarBand";
import NavSearchContent from "./NavSearchContent";
import { useState } from 'react';
import NavbarDropdown from './NavbarDropdown';

const NavContainer = () => {
   const [isOpen, setIsOpen] = useState(false); 
    const toggleDropdown = () => {
         setIsOpen(!isOpen);
    }
    return ( 
      <>
        <nav className="container-fluid flex justify-between items-center border-b-[#DADCE0] border-b-[1px] py-4 px-4 md:px-8 bg-[#ffffff]">
           <NavBarBand />
           <NavSearchContent />
           <NavAlertProfile />
           <>
           <FontAwesomeIcon icon={isOpen ? faXmark : faBars} onClick={toggleDropdown} className='md:hidden block text-[20px]' />
           </>
        </nav>
         {isOpen &&(
        <div className="w-full py-4 bg-slate-400 md:hidden block">
         <NavbarDropdown />
        </div>
         )}
      </>
     );
}
 
export default NavContainer;