import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavBarMenuIcon } from "./NavBarItem";
import { NavbarLinks } from "./NavbarLinks";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = (
    <div onClick={handleToggle}>
      <NavBarMenuIcon icon={<AiOutlineClose size="26" />} />
    </div>
  );

  const openMenu = (
    <div onClick={handleToggle} className="m-0 p-0">
      <NavBarMenuIcon icon={<AiOutlineMenu size="26" />} />
    </div>
  );

  return (
    <div className="navbar w-full sm:my-4">
      <div className="flex sm:grid sm:grid-flow-col justify-between items-center w-full h-full">
        <a className="logo text-primary-dark p-4 text-3xl font-bold lg:pl-12" href="/">
          Sg.
        </a>
        {isOpen ? (
          <nav className="sm:flex h-fit fixed sm:sticky top-0 bg-black sm:justify-between items-center w-full sm:w-fit sm:h-full p-0 m-0">
            {closeMenu}
            <NavbarLinks />
          </nav>
        ) : (
          openMenu
        )}
        <nav className="sm:flex h-fit hidden fixed sm:sticky top-0 bg-black rounded-md sm:justify-between items-center w-full sm:w-fit sm:h-full p-0 m-0">
          <NavbarLinks />
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
