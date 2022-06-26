import React from "react";
import Logo from "../../images/logo.svg"
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Navbar(){
  return(
    <div className="sticky top-0 py-8 flex items-center justify-between">
      <div className="flex items-center">
         <img src={Logo} className="mr-6" alt="logo Nefa"/>
        <nav className="flex">
          <a href="/" className="mx-6 hover:text-primary">Crytocurrency</a>
          <a href="/" className="mx-6 hover:text-primary">Exchanges</a>
          <a href="/" className="mx-6 hover:text-primary">Watchlist</a>
          <a href="/" className="mx-6 hover:text-primary">NFT</a>
          <a href="/" className="mx-6 hover:text-primary">Portfolio</a>
          <a href="/" className="mx-6 hover:text-primary">Products</a>
        </nav>
      </div>
      <div className="flex">
        <PrimaryButton className="mr-4">
          Log In
        </PrimaryButton>
        <SecondaryButton>
          Sign Up
        </SecondaryButton>
      </div>
    </div>
  );
}