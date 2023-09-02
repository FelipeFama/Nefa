import { client } from "@/lib/sanity";
import { GetStaticProps } from "next";

export interface Props {
  header: any;
  hero: any;
  coins: any;
  buy: any;
  partners: any;
  credit: any;
  trading: any;
  security: any;
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
  const buy = await client.fetch(`*[_type == "buy"]`);
  const partners = await client.fetch(`*[_type == "partners"]`);
  const credit = await client.fetch(`*[_type == "credit"]`);
  const trading = await client.fetch(`*[_type == "trading"]`);
  const security = await client.fetch(`*[_type == "security"]`);

  return {
    props: {
      header,
      hero,
      coins,
      buy,
      partners,
      credit,
      trading,
      security,
    },
  };
};
