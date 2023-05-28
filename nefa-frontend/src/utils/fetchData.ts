import { client } from "@/lib/sanity";
import { GetStaticProps } from "next";

export interface Props {
  header: any;
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const header = await client.fetch(`*[_type == "header"] {image,lists}`);

  return {
    props: {
      header,
    },
  };
};
