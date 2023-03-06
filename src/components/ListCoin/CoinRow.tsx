import { charts } from "../../data/charts";

interface CoinProps {
  image: string;
  coinName: string;
  coinPrice: number | string;
  coinUpTrend: boolean;
  key: number;
}

export function CoinRow({
  image,
  coinName,
  coinPrice,
  coinUpTrend,
}: CoinProps) {
  return (
    <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray text-sm w-max">
      <div className="flex items-center">
        <img
          className="inline h-[1em] mr-2 align-middle"
          draggable="false"
          src={image}
          alt={coinName}
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
          src={coinUpTrend ? charts.chartUp.image : charts.chartDown.image}
          alt={charts.chartUp.alt || charts.chartDown.alt}
        />
      </div>
    </div>
  );
}
