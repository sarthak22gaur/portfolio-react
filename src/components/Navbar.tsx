import hamburgerOpen from "../Assets/hamburger-open.svg";
import hamburgerClose from "../Assets/hamburger-close.svg";
import { AiFillProject } from "react-icons/ai";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillFileEarmarkFill,
} from "react-icons/bs";

import NavBarItem from "./NavBarItem";

function Navbar() {
  return (
    <div className="navbar fixed top w-full my-4">
      <div className="container flex justify-between items-center w-full h-full">
        <a className="logo text-primary-dark pl-4" href="/">
          Sg.
        </a>
        <img
          id="mobile-menu"
          className="mobile-menu"
          src={hamburgerOpen}
          alt="Open Menu"
        ></img>
        <nav className="flex justify-between items-center w-fit text-white h-full p-0 m-0">
          <img
            id="mobile-close"
            className="close-menu"
            src={hamburgerClose}
            alt="Close menu"
          ></img>
          <ul className="main-nav bg-black flex justify-between w-full h-full m-0 gap-4">
            <NavBarItem icon={<BsFillHouseFill size="22"/>} label="Home" />
            <NavBarItem icon={<BsFillPersonFill size="22"/>} label="About" />
            <NavBarItem icon={<AiFillProject size="22"/>} label="Projects" />
            <NavBarItem icon={<BsFillFileEarmarkFill size="22"/>} label="Resume" />
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
