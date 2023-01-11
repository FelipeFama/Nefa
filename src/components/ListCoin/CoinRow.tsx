import React from "react";
import { chart } from "../../context/cryptos";

interface coinProps {
  image: string;
  coinName: string;
  coinPrice: number;
  coinUpTrend: string;
}

export function CoinRow({
  image,
  coinName,
  coinPrice,
  coinUpTrend,
}: coinProps) {
  return (
    <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray">
      <div className="flex items-center">
        <img
          className="inline h-[1em] mr-2 align-middle"
          draggable="false"
          src={image}
        />
        {coinName}
      </div>
      <div className="flex items-center">
        {coinUpTrend ? (
          <span className="text-green mr-1">+</span>
        ) : (
          <span className="text-red mr-1">-</span>
        )}
        {coinPrice}
      </div>
      <div>
        <img
          src={coinUpTrend ? chart.chartUp.image : chart.chartDown.image}
          alt={chart.chartUp.alt || chart.chartDown.alt}
        />
      </div>
    </div>
  );
}
