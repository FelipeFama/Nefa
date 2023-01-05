import React from "react";
import logoImg from "../../assets/images/logo.svg";
import { Menu } from "./Menu";

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
      <nav className="flex items-center">
        <figure className=" ml-8">
          <img
            className=" h-8 mr-6"
            src={LOGO.logoImage.image.source}
            alt={LOGO.logoImage.image.alt}
          />
        </figure>
        <Menu />
      </nav>
    </>
  );
}
