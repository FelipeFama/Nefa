/* eslint-disable react/jsx-key */
import React from "react";
import emoji from "react-easy-emoji";
import { BsChevronRight } from "react-icons/bs";
import { CoinRow } from "./CoinRow";
export interface IData {
  image: string;
  name: string;
  price: number;
  uptrend: boolean;
}
export interface ListProps {
  title: string;
  more: string;
  data: IData[];
}

export function ListCoin({ title, more, data }: ListProps) {
  return (
    <>
      <div className="flex justify-between mb-6">
        <span className="font-bold text-lg flex gap-4 items-center">
          {emoji(title)}
        </span>
        <a href={more} className="text-primary cursor-pointer">
          More
          <BsChevronRight className="inline ml-2" />
        </a>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4 text-base">
          <span className="text-gray">Name</span>
          <span className="text-gray">Price</span>
          <span className="text-gray">Chart</span>
        </div>
        {data.map(({ image, name, price, uptrend }) => (
          <CoinRow
            image={image}
            coinName={name}
            coinPrice={price}
            coinUpTrend={uptrend}
          />
        ))}
      </div>
    </>
  );
}
