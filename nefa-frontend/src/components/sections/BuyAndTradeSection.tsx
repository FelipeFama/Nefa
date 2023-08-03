import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export interface Buy {
  title: {
    text1: string;
    text2: string;
  };
  description: string;
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}

interface BuyProps {
  buy: Buy[];
}

export function BuyAndTradeSection({ buy }: BuyProps) {
  const item = buy[0];
  console.log(item);
  return (
    <section className="container mx-auto mt-24 flex items-center">
      <div className="grid lg:grid-cols-2 max-md:justify-items-center gap-10 px-16 lg:p-12">
        <div className="flex items-center md:justify-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            {item.title.text1}
            <br />
            {item.title.text2}
          </h2>
        </div>
      </div>
    </section>
  );
}
