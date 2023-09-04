import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { SecondButton } from "../buttons/SecondButton";
import { SelectCurrencyButton } from "../buttons/SelectCurrencyButton";
import { useState } from "react";
import { Buy as BuyComponent } from "@/types/sections/buy";

interface BuyProps {
  buy: BuyComponent[];
}

const formHandler = (e: any) => {
  e.preventDefault();
};

const inputChangeHandler = (e: any) => {
  console.log(e.target.value);
};

export function BuyAndTradeSection({ buy }: BuyProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<any[]>([]);

  const item = buy[0];
  const descriptionParts = item.description;

  const handleCurrencyChange = (selectedCurrency: any) => {
    setSelectedCurrency(selectedCurrency);
  };

  return (
    <section className="container mx-auto mt-24 flex items-center">
      <div className="grid lg:grid-cols-2 max-md:justify-items-center gap-10 px-16 lg:p-12">
        <div className="flex items-center md:justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              {item.title.text1}
              <br />
              {item.title.text2}
            </h2>
            <p className="text-gray mb-6">
              {descriptionParts[0]}
              <br />
              {descriptionParts[1]}
            </p>
            <form onSubmit={formHandler}>
              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <label>
                    <input
                      type="text"
                      value="5,000"
                      onChange={inputChangeHandler}
                      className="text-right outline-none w-full"
                    />
                  </label>
                </div>
                <SelectCurrencyButton
                  value="BTC"
                  onChange={handleCurrencyChange}
                />
              </div>

              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                  <div className="border-r border-primary pr-4 md:pr-14">
                    <small className="text-primary">Get</small>
                  </div>
                  <label>
                    <input
                      type="text"
                      value="0.10901"
                      onChange={inputChangeHandler}
                      className="text-right outline-none w-full"
                    />
                  </label>
                </div>
                <SelectCurrencyButton
                  value="USD"
                  onChange={handleCurrencyChange}
                />
              </div>
            </form>
            <SecondButton className="w-full" onClick={undefined}>
              Buy Now
            </SecondButton>
          </div>
        </div>
        <figure className="row-start-1 xl:col-start-2">
          <Image
            // eslint-disable-next-line react-hooks/rules-of-hooks
            {...useNextSanityImage(client, item.image.asset._ref)}
            alt={item.image.alt}
            width={800}
            height={800}
            priority={false}
          />
        </figure>
      </div>
    </section>
  );
}
