import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillFileEarmarkFill,
} from "react-icons/bs";

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
        <a
          className="logo text-primary-dark p-4 text-3xl font-bold lg:pl-12"
          href="/"
        >
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

function NavbarLinks() {
  return (
    <ul className="flex flex-col sm:flex-row justify-between items-center w-full mb-4 sm:mb-0 sm:px-4 gap-4 active:text-primary-dark">
      <NavBarItem
        icon={<BsFillHouseFill size="16" />}
        label="Home"
        pagelink="/"
      />
      <NavBarItem
        icon={<BsFillPersonFill size="16" />}
        label="About"
        pagelink="/about"
      />
      <NavBarItem
        icon={<AiFillProject size="16" />}
        label="Projects"
        pagelink="/projects"
      />
      <NavbarCTA label="Resume" pagelink="/resume" />
    </ul>
  );
}

function NavBarItem({
  icon,
  label,
  pagelink,
}: {
  icon: React.ReactNode;
  label: string;
  pagelink: string;
}) {
  return (
    <li>
      <a href={pagelink}>
        <div className="flex flex-row justify-center items-center gap-2 mx-2 my-4 px-2  text-white hover:text-primary-dark">
          <i>{icon}</i>
          <span>{label}</span>
        </div>
      </a>
    </li>
  );
}

function NavbarCTA({ label, pagelink }: { label: string; pagelink: string }) {
  return (
    <li>
      <a href={pagelink}>
        <div className="flex flex-row justify-center items-center gap-2 m-2 px-4 py-1 border-primary-dark border-2 rounded-sm  text-primary-dark hover:text-black hover:bg-primary-dark">
          <span>{label}</span>
        </div>
      </a>
    </li>
  );
}

function NavBarMenuIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="text-white float-right p-4 sm:hidden">{icon}</button>
  );
}
export default Navbar;
