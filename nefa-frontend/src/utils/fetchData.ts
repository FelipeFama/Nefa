import { client } from "@/lib/sanity";
import { GetStaticProps } from "next";

export interface Props {
  hero: any;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const hero = await client.fetch(`*[_type == "hero"] `);

  return {
    props: {
      hero,
    },
  };
};
