import { client } from "@/lib/sanity";
import { GetStaticProps } from "next";

export interface Props {
  header: any;
  hero: any;
  coins: any;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const header = await client.fetch(`*[_type == "header"]`);
  const hero = await client.fetch(`*[_type == "hero"]`);
  const coins = await client.fetch(`
    *[_type == "coins"][0]{
      "trendcoins": trendcoins[] { text, image, alt, price, span, chartImage },
      "gainercoins": gainercoins[] { text, image, alt, price, span, chartImage },
      "recentlycoins": recentlycoins[] { text, image, alt, price, span, chartImage }
    }
 `);

  return {
    props: {
      header,
      hero,
      coins,
    },
  };
};
