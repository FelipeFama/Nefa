import { client } from "@/lib/sanity";
import { Props } from "@/types";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const header = await client.fetch(
    `*[_type == "header"] | order(_createdAt asc)`,
  );
  const hero = await client.fetch(`*[_type == "hero"] | order(_createdAt asc)`);
  const coins = await client.fetch(`
    *[_type == "coins"][0] {
      "trendcoins": trendcoins[] { text, image, alt, price, span, chartImage },
      "gainercoins": gainercoins[] { text, image, alt, price, span, chartImage },
      "recentlycoins": recentlycoins[] { text, image, alt, price, span, chartImage }
    } 
 `);
  const buy = await client.fetch(`*[_type == "buy"] | order(_createdAt asc)`);
  const partners = await client.fetch(
    `*[_type == "partners"] | order(_createdAt asc)`,
  );
  const credit = await client.fetch(
    `*[_type == "credit"] | order(_createdAt asc)`,
  );
  const trading = await client.fetch(
    `*[_type == "trading"] | order(_createdAt asc)`,
  );
  const security = await client.fetch(
    `*[_type == "security"] | order(_createdAt desc)`,
  );
  const step = await client.fetch(
    `*[_type == "step"] | order(_createdAt desc)`,
  );
  const faq = await client.fetch(`*[_type == "faq"] | order(_createdAt desc)`);
  const footer = await client.fetch(
    `*[_type == "footer"] | order(_createdAt asc)`,
  );

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
      step,
      faq,
      footer,
    },
  };
};
