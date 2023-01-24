/* eslint-disable react/jsx-key */
import React from "react";
import emoji from "react-easy-emoji";
import { BsChevronRight } from "react-icons/bs";
import { CoinRow } from "./CoinRow";

interface IData {
  image: string;
  name: string;
  price: number | string;
  uptrend: boolean;
}
interface ListProps {
  title: string;
  more: string;
  data: IData[];
}

export const trendCoins: IData[] = [
  {
    image: "/cryptocurrencies/bitcoin.png",
    name: "Bitcoin",
    price: "$43,180.13",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/etherium.png",
    name: "Ethereum",
    price: "$3,480.65",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/solana.png",
    name: "Solana",
    price: "$150,20",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/doge.png",
    name: "Dogecoin",
    price: "$0,1572",
    uptrend: true,
  },
];

export const gainerCoins: IData[] = [
  {
    image: "/cryptocurrencies/pappay.png",
    name: "PAPPAY",
    price: "$0.00374",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/bitcoinasia.png",
    name: "Bitcoin Asia",
    price: "$0.02096",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/moonrock.png",
    name: "MoonRock",
    price: "$0.004907",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/ninjafloki.png",
    name: "NinjaFloki",
    price: "$0.000123",
    uptrend: true,
  },
];

export const recentlyCoins: IData[] = [
  {
    image: "/cryptocurrencies/metacraft.png",
    name: "Metacraft",
    price: "$0.0608",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/frog.png",
    name: "Frog",
    price: "$0.5875",
    uptrend: false,
  },
  {
    image: "/cryptocurrencies/muskdoge.png",
    name: "Musk Doge",
    price: "$0.04041",
    uptrend: true,
  },
  {
    image: "/cryptocurrencies/2share.png",
    name: "2SHARE",
    price: "$1,366.24",
    uptrend: true,
  },
];

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
        {data.map(({ image, name, price, uptrend }, index) => (
          <CoinRow
            key={index}
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
