import React from "react";
import buyIcon from "../../images/illustrations/buy.png";
import PrimaryButton from "../buttons/PrimaryButton";

export default function BuyAndTradeSection() {
  return(
    <div className="container mx-auto h-screen flex items-center">
      <div className="grid grid-cols-2 gap-10">
        <div className="mt-32 px-10">
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
          <div className="flex mb-6">
            <div className="border border-primary rounded-xl p-4 flex items-center">
             <div className="border-r border-primary pr-6">
               <span className="text-primary">Amount</span>
             </div>
             <input type="text" className="text-right outline-none"/>
            </div>
          </div>
          <PrimaryButton className="w-full">
           Buy Now
          </PrimaryButton>
        </div>
        <div>
          <img src={buyIcon} alt="buy icon" />
        </div>
      </div>
    </div>
  )
}