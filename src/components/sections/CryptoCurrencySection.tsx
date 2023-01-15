import React from "react";
import { gainerCoins, recentlyCoins, trendCoins } from "../../context/cryptos";
import { ListCoin } from "../ListCoin";

export function CryptoCurrencySection() {
  return (
    <section className="-mt-20 mx-12 relative">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 lg:w-max w-full">
          <div className="px-5 mb-6">
            <ListCoin title="🔥 Trending" data={trendCoins} />
          </div>
          <div className="px-5 mb-6">
            <ListCoin title="🚀  Top Gainers" data={gainerCoins} />
          </div>
          <div className="px-5 mb-6">
            <ListCoin title="💎  Recently Added" data={recentlyCoins} />
          </div>
        </div>
      </div>
    </section>
  );
}
