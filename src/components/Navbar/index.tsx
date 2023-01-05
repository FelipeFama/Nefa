import React from "react";
import logoImg from "../../assets/images/logo.svg";
import { Menu } from "./Menu";
import { FirstButton } from "../buttons/FirstButton";
import { SecondButton } from "../buttons/SecondButton";

const LOGO = {
  logoImage: {
    image: {
      source: logoImg,
      alt: "nefa logo",
    },
  },
};

export function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-center w-full">
        <figure className="ml-4">
          <img
            className="h-12 mr-8"
            src={LOGO.logoImage.image.source}
            alt={LOGO.logoImage.image.alt}
          />
        </figure>
        <Menu />
        <div className="flex gap-3 mx-4">
          <FirstButton />
          <SecondButton />
        </div>
      </nav>
    </>
  );
}
