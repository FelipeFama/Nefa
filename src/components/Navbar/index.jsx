import React, { useState } from "react";
import { BsList, BsX } from "react-icons/bs"
import classNames from "classnames";
import OutsideClickHandler from "react-outside-click-handler/build/OutsideClickHandler";
import Logo from "../../images/logo.svg"
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Menu from "./Menu";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownClass = classNames({
    'text-base left-0 top-full right-0 absolute transition-all duration-400': true,
    'invisible opacity-0': !dropdownOpen,
    'visible opacity-100': dropdownOpen,
  });

  return (
    <nav className={`relative transition-all duration-400 ${dropdownOpen ? 'bg-white' : 'bg-primary'} bg-opacity-5`}>
      <div className="sticky px-4 container mx-auto top-0 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} className="mr-6" alt="Nefa" />
          <div className='hidden mx-4 gap-8 xl:flex'>
           <Menu />
          </div>
        </div>
        <div className="hidden gap-4 md:flex">
          <SecondaryButton>
            Sign In
          </SecondaryButton>
          <PrimaryButton>
            Sign Up
          </PrimaryButton>
        </div>
        <div className="md:hidden text-2xl">
          <button className="z-50 p-4 block transition-all" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {dropdownOpen ?
              <BsX />
              :
              <BsList />
            }
          </button>
          {/* Menu dropdown */}
          <div className={dropdownClass}>
            <div className="h-screen left-0 bg-black bg-opacity-30">
              <OutsideClickHandler onOutsideClick={() => setDropdownOpen(false)}>
                <div className="z-20 shadow-xl bg-white p-6">
                 <div className="gap-4 flex mb-6">
                    <SecondaryButton className="w-full">
                      Sign In
                    </SecondaryButton>
                    <PrimaryButton className="w-full">
                      Sign Up
                    </PrimaryButton>
                 </div>
                 <div className="mb-4">
                   <Menu />
                 </div>
               </div>
              </OutsideClickHandler>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}