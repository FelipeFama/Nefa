import React from "react";
import {BsChevronDown} from "react-icons/bs"
import Logo from "../../images/logo.svg"
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function Navbar() {
  return (
   <nav className="bg-primary bg-opacity-5 w-full">
     <div className="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
        <div className="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
          <div className="w-full flex flex-row items-center justify-between py-6">
           <div>
             <img src={Logo} className="mr-6" alt="logo Nefa"/>
           </div>
          </div>
          <ul className="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0 hidden lg:flex">
            <li className="w-full">
             <a href="/" className="md:px-4 py-2 text-sm bg-transparent rounded-lg hover:text-primary">
               Cryptocurrency
             </a>
            </li>
            <li className="w-full">
             <a href="/" className="md:px-4 py-2 text-sm bg-transparent rounded-lg hover:text-primary">
               Exchanges
             </a>
            </li>
            <li className="w-full">
             <a href="/" className="md:px-4 py-2 text-sm bg-transparent rounded-lg hover:text-primary">
               Watchlist
             </a>
            </li>
            <li className="w-full">
             <a href="/" className="md:px-4 py-2 text-sm bg-transparent rounded-lg hover:text-primary">
               NFT
             </a>
            </li>
            <li className="w-full">
             <a href="/" className="md:px-4 py-2 text-sm bg-transparent rounded-lg hover:text-primary">
               Portfolio
             </a>
            </li>
            <li className="relative"> 
             <a href="/" className="md:px-4 py-2 text-sm bg-transparent rounded-lg hover:text-primary">
               <button className=" flex items-center">
                 <span>Products</span>
                 <span><BsChevronDown className="inline ml-2"/></span>
               </button>
              </a>
            </li>
          </ul>
       </div> 
       <div className="flex space-x-3">
          <PrimaryButton className="mr-4">
            Log In
          </PrimaryButton>
          <SecondaryButton>
           Sign Up
          </SecondaryButton>
        </div>
      </div>
    </nav>
  );
}