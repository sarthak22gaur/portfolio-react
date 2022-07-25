import { AiFillProject } from "react-icons/ai";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillFileEarmarkFill,
} from "react-icons/bs";

import { NavBarItem } from "./NavBarItem";

export function NavbarLinks() {
  return (
    <ul className="flex flex-col sm:flex-row justify-between w-full mb-4 sm:mb-0 sm:px-4 gap-4 active:text-primary-dark">
      <NavBarItem icon={<BsFillHouseFill size="16" />} label="Home" pagelink="/" />
      <NavBarItem icon={<BsFillPersonFill size="16" />} label="About" pagelink="/about"/>
      <NavBarItem icon={<AiFillProject size="16" />} label="Projects" pagelink="/projects"/>
      <NavBarItem icon={<BsFillFileEarmarkFill size="16" />} label="Resume" pagelink="/resume"/>
    </ul>
  );
}
