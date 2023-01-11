import React from "react";
import { gainerCoins, recentlyCoins, trendCoins } from "../../context/cryptos";
import { ListCoin } from "../ListCoin";

export function CryptoCurrencySection() {
  return (
    <section className="-mt-20 mx-12 absolute">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow">
        <div className="grid grid-cols-3 w-max">
          <div className="px-5">
            <ListCoin title="🔥 Trending" data={trendCoins} more={""} />
          </div>
          <div className="px-5">
            <ListCoin title="🚀  Top Gainers" data={gainerCoins} more={""} />
          </div>
          <div className="px-5">
            <ListCoin
              title="💎  Recently Added"
              data={recentlyCoins}
              more={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
