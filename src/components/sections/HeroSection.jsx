import React from "react";
import {BsChevronDown} from "react-icons/bs" 
import globoCrypto from "../../images/illustrations/globe.png"
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function HeroSection() {
  return (
    <section className="bg-primary bg-opacity-5 pt-8 pb-16 md:pt-0">
     <div className="container px-4 md:px-0 mx-auto grid md:grid-cols-2">
       <div className="flex items-center">
         <div>
           <p className="text-primary font-bold">
             SIGN UP TODAY
           </p>
           <h1 className="text-4xl md:text-5xl font-bold leading-normal">
             The World’s 
               <br/>
                 <span className="text-blue-gradient">
                   Fastest Growing
                 </span>
                <br/>
              Crypto Web App
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-gray">
                Buy and sell 200+ cryptocurrencies with 20+  flat currencies using 
                 <br/>
                bank transfers or your credit/debit card.
              </p>
            </div>
            <div className="col-span-2 flex lg:mb-12">
              <SecondaryButton className="mr-4">
                Get Started
              </SecondaryButton>
              <PrimaryButton>
                Download App
                <BsChevronDown className="inline ml-2" />
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={globoCrypto} alt="Globe" />
        </div>
     </div>
   </section>
  );
}