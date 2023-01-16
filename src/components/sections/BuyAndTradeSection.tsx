import React from "react";
import { BsChevronDown } from "react-icons/bs";
import buyImg from "../../assets/images/illustrations/buy.png";
import { SecondButton } from "../buttons/SecondButton";

const illustrations = {
  buyImage: {
    image: {
      source: buyImg,
      alt: "buy crypto",
    },
  },
};

export function BuyAndTradeSection() {
  return (
    <section className="container mx-auto mt-24 lg:mt-96 flex items-center pb-24">
      <div className="grid lg:grid-cols-2 gap-10 p-12">
        <div className="flex items-center md:justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Buy & trade on the <br /> original crypto exchange.
            </h2>
            <p className="text-gray mb-6">
              Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
              Crypto Coin. We accept BTC crypto-currency
            </p>
            <div className="flex justify-between gap-6 mb-6">
              <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-3/5">
                <div className="border-r border-primary pr-4 md:pr-6">
                  <small className="text-primary">Amount</small>
                </div>
                <input
                  type="text"
                  value="5,000"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
                <img
                  src="/cryptocurrencies/usd.svg"
                  alt=""
                  className="inline mr-2"
                />
                <span className="mr-4">USD</span>
                <span className="px-1">
                  <BsChevronDown className="mx-2" />
                </span>
              </div>
            </div>
            <div className="flex gap-6 mb-6">
              <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-3/5">
                <div className="border-r border-primary pr-4 md:pr-6">
                  <small className="text-primary">Get</small>
                </div>
                <input
                  type="text"
                  value="0.10901"
                  className="text-right outline-none w-full"
                />
              </div>
              <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
                <img
                  src="/cryptocurrencies/btc.svg"
                  alt=""
                  className="inline mr-2"
                />
                <span className="mr-4">BTC</span>
                <span className="px-1">
                  <BsChevronDown className="mx-2" />
                </span>
              </div>
            </div>
            <SecondButton className="w-full" onClick={undefined}>
              Buy Now
            </SecondButton>
          </div>
        </div>
        <figure className="row-start-1 xl:col-start-2">
          <img
            src={illustrations.buyImage.image.source}
            alt={illustrations.buyImage.image.alt}
          />
        </figure>
      </div>
    </section>
  );
}
