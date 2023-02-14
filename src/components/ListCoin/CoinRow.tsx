import chartup from "../../assets/images/charts/up.svg";
import chartdown from "../../assets/images/charts/down.svg";

export const chart = {
  chartUp: {
    image: chartup,
    alt: "bitcoin chart",
  },
  chartDown: {
    image: chartdown,
    alt: "bitcoin chart",
  },
};

interface CoinProps {
  image: string;
  coinName: string;
  coinPrice: number | string;
  coinUpTrend: boolean;
}

export function CoinRow({
  image,
  coinName,
  coinPrice,
  coinUpTrend,
}: CoinProps) {
  return (
    <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray">
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
          src={coinUpTrend ? chart.chartUp.image : chart.chartDown.image}
          alt={chart.chartUp.alt || chart.chartDown.alt}
        />
      </div>
    </div>
  );
}
