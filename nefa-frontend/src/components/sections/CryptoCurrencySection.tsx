import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import emoji from "react-easy-emoji";
import { BsChevronRight } from "react-icons/bs";

export interface Coins {
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  text: string;
  span: string;
  price: string;
  chartImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}

interface CoinsProps {
  coins: {
    trendcoins: Coins[];
    gainercoins: Coins[];
    recentlycoins: Coins[];
  };
}

export function CryptoCurrencySection({ coins }: CoinsProps) {
  const { trendcoins, gainercoins, recentlycoins } = coins;

  return (
    <section className="-mt-20 mx-12 relative px-10">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:justify-center w-full">
          {/* trending coins */}
          <div className="px-5 mb-6">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg flex gap-4 items-center">
                {emoji("🔥")} Trending
              </span>
              <a href="#" className="text-primary cursor-pointer">
                More
                <BsChevronRight className="inline ml-2" />
              </a>
            </div>
            <div className="grid grid-cols-3 mb-4 text-base">
              <span className="text-gray">Name</span>
              <span className="text-gray">Price</span>
              <span className="text-gray">Chart</span>
            </div>
            {trendcoins.map((coin, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray text-sm w-max">
                  <div className="flex items-center">
                    <figure>
                      <Image
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        {...useNextSanityImage(client, coin.image.asset._ref)}
                        alt={coin.image.alt}
                        object-fit="cover"
                        priority={false}
                      />
                      {coin.text}
                    </figure>
                  </div>
                  <div className="flex items-center">
                    {coin.span === "+" ? (
                      <span className="text-green mr-1">{coin.span}</span>
                    ) : (
                      <span className="text-red mr-1">{coin.span}</span>
                    )}
                    {coin.price}
                  </div>
                  <figure>
                    <Image
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, coin.chartImage.asset)}
                      alt={coin.chartImage.alt}
                      object-fit="cover"
                      priority={false}
                    />
                  </figure>
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* gainer coins */}
          <div className="px-5 mb-6">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg flex gap-4 items-center">
                🚀 Top Gainers
              </span>
              <a href="#" className="text-primary cursor-pointer">
                More
                <BsChevronRight className="inline ml-2" />
              </a>
            </div>
            <div className="grid grid-cols-3 mb-4 text-base">
              <span className="text-gray">Name</span>
              <span className="text-gray">Price</span>
              <span className="text-gray">Chart</span>
            </div>
            {gainercoins.map((coin, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray text-sm w-max">
                  <div className="flex items-center">
                    <figure>
                      <Image
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        {...useNextSanityImage(client, coin.image.asset._ref)}
                        alt={coin.image.alt}
                        object-fit="cover"
                        priority={false}
                      />
                      {coin.text}
                    </figure>
                  </div>
                  <div className="flex items-center">
                    {coin.span === "+" ? (
                      <span className="text-green mr-1">{coin.span}</span>
                    ) : (
                      <span className="text-red mr-1">{coin.span}</span>
                    )}
                    {coin.price}
                  </div>
                  <figure>
                    <Image
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, coin.chartImage.asset)}
                      alt={coin.chartImage.alt}
                      object-fit="cover"
                      priority={false}
                    />
                  </figure>
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* recently coins */}
          <div className="px-5 mb-6">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg flex gap-4 items-center">
                💎 Recently Added
              </span>
              <a href="#" className="text-primary cursor-pointer">
                More
                <BsChevronRight className="inline ml-2" />
              </a>
            </div>
            <div className="grid grid-cols-3 mb-4 text-base">
              <span className="text-gray">Name</span>
              <span className="text-gray">Price</span>
              <span className="text-gray">Chart</span>
            </div>
            {recentlycoins.map((coin, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray text-sm w-max">
                  <div className="flex items-center">
                    <figure>
                      <Image
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        {...useNextSanityImage(client, coin.image.asset._ref)}
                        alt={coin.image.alt}
                        object-fit="cover"
                        priority={false}
                      />
                      {coin.text}
                    </figure>
                  </div>
                  <div className="flex items-center">
                    {coin.span === "+" ? (
                      <span className="text-green mr-1">{coin.span}</span>
                    ) : (
                      <span className="text-red mr-1">{coin.span}</span>
                    )}
                    {coin.price}
                  </div>
                  <figure>
                    <Image
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, coin.chartImage.asset)}
                      alt={coin.chartImage.alt}
                      object-fit="cover"
                      priority={false}
                    />
                  </figure>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
