import React from "react";
import {BsChevronDown, BsList} from "react-icons/bs"

import Logo from "../../images/logo.svg"
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className='bg-primary bg-opacity-5'>

    <div className="sticky px-4 container mx-auto top-0 py-8 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} className="mr-6" alt="Neva" />
        <div className='hidden mx-4 gap-8 xl:flex'>
         <Menu />
        </div>
     </div>
      <div className="hidden  md:flex">
        <SecondaryButton className="mr-4">
          Sign In
        </SecondaryButton>
        <PrimaryButton>
          Sign Up
        </PrimaryButton>
      </div>
    </div>
  </nav>
  );
}