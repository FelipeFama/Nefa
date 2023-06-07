import { client } from "@/lib/sanity";
import { GetStaticProps } from "next";

export interface Props {
  header: any;
  hero: any;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const header = await client.fetch(`*[_type == "header"] `);
  const hero = await client.fetch(`*[_type == "hero"] `);

  return {
    props: {
      header,
      hero,
    },
  };
};