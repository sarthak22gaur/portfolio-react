import { AiFillProject } from "react-icons/ai";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillFileEarmarkFill,
} from "react-icons/bs";

import { NavBarItem } from "./NavBarItem";

export function NavbarLinks() {
  return (
    <ul className="flex flex-col sm:flex-row justify-between w-full mb-4 sm:mb-0 sm:px-4 gap-4">
      <NavBarItem icon={<BsFillHouseFill size="22" />} label="Home" />
      <NavBarItem icon={<BsFillPersonFill size="22" />} label="About" />
      <NavBarItem icon={<AiFillProject size="22" />} label="Projects" />
      <NavBarItem icon={<BsFillFileEarmarkFill size="22" />} label="Resume" />
    </ul>
  );
}
