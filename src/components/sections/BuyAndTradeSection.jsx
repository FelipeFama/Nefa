import React from "react";
import { BsChevronDown } from "react-icons/bs";
import buyIcon from "../../images/illustrations/buy.png";
import PrimaryButton from "../buttons/PrimaryButton";

export default function BuyAndTradeSection() {
  return (
    <section className="w-full my-24">
      <div className="relative max-w-screen-xl px-4 sm:px-8 mx-auto grid grid-cols-12 gap-x-6 overflow-hidden">
       <div className="col-span-12 lg:col-span-6 mt-4 xl:mt-20 space-y-6 px-4">
         <h2 className="font-bold text-4xl mb-6">
            Buy & trade on the 
            <br/>
            original crypto exchange.
         </h2>
         <p className="text-gray mb-4 w-max">
           Buy now and get 40% extra bonus Minimum pre-sale amount 
             <br/>
           25 Crypto Coin. We accept BTC crypto-currency
          </p>
          <div className="space-y-6 lg:pr-12">
           <div className="flex items-center space-x-4">
             <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center lg:max-w-[336px]">
               <div className="border-r border-primary pr-4 md:pr-6">
                 <span className="text-primary">Amount</span>
               </div>
               <input type="text" value="5,000" className="text-right outline-none w-full"/>
             </div>
             <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center max-w-[106px] sm:max-w-[159px]">
               <img src="/cryptocurrencies/usd.svg" alt="" className="inline mr-2" />
               <span className="mr-4">USD</span>
               <span>
                 <BsChevronDown />
               </span>
             </div>
           </div>
           <div className="flex items-center space-x-4">
             <div className="border border-primary rounded-xl p-4 flex items-center lg:max-w-[336px]">
               <div className="border-r border-primary pr-6 ">
                 <span className="text-primary">Get</span>
               </div>
               <input type="text" value="0.10901" className="text-right outline-none w-full"/>
             </div>
             <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center max-w-[106px] sm:max-w-[159px]">
               <img src="/cryptocurrencies/btc.svg" alt="" className="inline mr-2" />
               <span className="mr-4">USD</span>
               <span>
                 <BsChevronDown />
               </span>
             </div>
           </div>
           <PrimaryButton className="w-full">
             Buy Now
           </PrimaryButton>
         </div>
       </div>
       <div className="col-span-12 lg:col-span-6 hidden sm:block">
         <div className="w-full">
           <img src={buyIcon} alt="buy icon" />
         </div>
       </div>
     </div>
    </section>
  );
}