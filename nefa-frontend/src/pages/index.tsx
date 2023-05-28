import Header from "@/components/layout/Header";
import { getStaticProps } from "@/utils/fetchData";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="description" content="NEFA - Criptocurrency landing page" />
        <meta name="keywords" content="Criptocurrency landing page,NEFA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nefa</title>
      </Head>
      <Header />
      <main className="overflow-hidden">
        <div>nefa version in next</div>
      </main>
    </>
  );
}

export { getStaticProps };
