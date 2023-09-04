import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import emoji from "react-easy-emoji";
import { BsChevronRight } from "react-icons/bs";
import { Coins as CoinsComponents } from "@/types/sections/crypto";

interface CoinsProps {
  coins: {
    trendcoins: CoinsComponents[];
    gainercoins: CoinsComponents[];
    recentlycoins: CoinsComponents[];
  };
}

export function CryptoCurrencySection({ coins }: CoinsProps) {
  const { trendcoins, gainercoins, recentlycoins } = coins;

  return (
    <section className="-mt-20 mx-12 relative px-5 lg:px-10 max-sm:flex max-sm:justify-center">
      <div className="max-md:w-[max-content] lg:container mx-auto rounded-3xl bg-white py-8 lg:px-4 shadow">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:justify-center w-full">
          {/* trending coins */}
          <div className="px-5 mb-6">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg flex gap-4 items-center">
                {emoji("🔥 Trending")}
              </span>
              <Link href="#" className="text-primary cursor-pointer">
                More
                <BsChevronRight className="inline ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-3 mb-4 text-base">
              <span className="text-gray">Name</span>
              <span className="text-gray">Price</span>
              <span className="text-gray">Chart</span>
            </div>
            {trendcoins.map((coin, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray text-sm w-max">
                  <figure className="flex items-center">
                    <Image
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, coin.image.asset._ref)}
                      alt={coin.image.alt}
                      object-fit="cover"
                      priority={false}
                      className="inline w-[1em] h-[1em] mr-2 align-middle"
                    />
                    {coin.text}
                  </figure>

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
                      alt={coin.chartImage.chartAlt}
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
                {emoji("🚀 Top Gainers")}
              </span>
              <Link href="#" className="text-primary cursor-pointer">
                More
                <BsChevronRight className="inline ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-3 mb-4 text-base">
              <span className="text-gray">Name</span>
              <span className="text-gray">Price</span>
              <span className="text-gray">Chart</span>
            </div>
            {gainercoins.map((coin, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray text-sm w-max">
                  <figure className="flex items-center">
                    <Image
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, coin.image.asset._ref)}
                      alt={coin.image.alt}
                      object-fit="cover"
                      priority={false}
                      className="inline w-[1em] h-[1em] mr-2 align-middle"
                    />
                    {coin.text}
                  </figure>

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
                      alt={coin.chartImage.chartAlt}
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
                {emoji("💎 Recently Added")}
              </span>
              <Link href="#" className="text-primary cursor-pointer">
                More
                <BsChevronRight className="inline ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-3 mb-4 text-base">
              <span className="text-gray">Name</span>
              <span className="text-gray">Price</span>
              <span className="text-gray">Chart</span>
            </div>
            {recentlycoins.map((coin, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray text-sm w-max">
                  <figure className="flex items-center">
                    <Image
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, coin.image.asset._ref)}
                      alt={coin.image.alt}
                      object-fit="cover"
                      priority={false}
                      className="inline w-[1em] h-[1em] mr-2 align-middle"
                    />
                    {coin.text}
                  </figure>

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
                      alt={coin.chartImage.chartAlt}
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
