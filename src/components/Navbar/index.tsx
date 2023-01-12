import React, { useState } from "react";
import classNames from "classnames";
import { BsList, BsX } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import { logo } from "../../context/global";
import { FirstButton } from "../buttons/FirstButton";
import { SecondButton } from "../buttons/SecondButton";
import { Menu } from "./Menu";

interface Props {
  className: string;
}

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownClass = classNames({
    "text-base left-0 top-full right-0 absolute transition-all duration-400":
      true,
    "invisible opacity-0": !dropdownOpen,
    "visible opacity-100": dropdownOpen,
  });

  return (
    <>
      <header
        className={`flex items-center py-10 relative transition-all duration-400 ${
          dropdownOpen ? "bg-white" : "bg-primary"
        } bg-opacity-5`}
      >
        <nav className="flex items-center justify-center w-full">
          <figure className="ml-4">
            <img
              className="h-12 mr-8"
              src={logo.logoImage.image.source}
              alt={logo.logoImage.image.alt}
            />
          </figure>
          <Menu />
          <div className="flex gap-3 mx-4">
            <FirstButton className={""} onClick={undefined}>
              Log In
            </FirstButton>
            <SecondButton className={""} onClick={undefined}>
              Sign Up
            </SecondButton>
          </div>
        </nav>
      </header>
    </>
  );
}
