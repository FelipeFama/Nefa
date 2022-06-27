import React from "react";
import {BsChevronDown} from "react-icons/bs" 
import globoCrypto from "../../images/illustrations/globe.png"
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

export default function HeroSection () {
  return (
    <section className="bg-primary bg-opacity-5 pb-24">
     <div className="container mx-auto grid grid-cols-2">
       <div className="flex items-center">
         <div>
              <p className="text-primary font-bold">
                SIGN UP TODAY
              </p>
              <h1 className="text-5xl font-bold leading-normal">
                The World’s 
                  <br/>
                    <span className="text-blue">
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
              <div className="flex">
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
          <div>
           <img src={globoCrypto} alt="Globe" />
          </div>
       </div>
     </section>
  )
}