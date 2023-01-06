import React from "react";
import { logo } from "../../context/useSections";
import { FirstButton } from "../buttons/FirstButton";
import { SecondButton } from "../buttons/SecondButton";
import { Menu } from "./Menu";

export function Navbar() {
  return (
    <>
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
    </>
  );
}
