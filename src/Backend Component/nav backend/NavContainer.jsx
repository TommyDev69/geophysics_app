import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import NavAlertProfile from "./NavAlertProfile";
import NavBarBand from "./NavBarBand";
import NavSearchContent from "./NavSearchContent";
import { useState } from 'react';
import NavbarDropdown from './NavbarDropdown';

const NavContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // safer toggle
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center border-b border-[#DADCE0] py-4 px-4 md:px-8 bg-white">
        
        {/* Logo */}
        <NavBarBand />

        {/* Search (hide on mobile) */}
        <div className="hidden md:block">
          <NavSearchContent />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Profile (hide on mobile) */}
          <div className="hidden md:block">
            <NavAlertProfile />
          </div>

          {/* Mobile menu icon */}
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            onClick={toggleDropdown}
            className="md:hidden block text-[20px] cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="w-full py-4 bg-slate-100 md:hidden">
          <NavbarDropdown />
        </div>
      )}
    </>
  );
};

export default NavContainer;