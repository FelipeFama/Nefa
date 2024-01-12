import Layout from "@/layout";
import { BackToTopSection } from "@/components/sections/BackToTopSection";
import { BuyAndTradeSection } from "@/components/sections/BuyAndTradeSection";
import { CreditCard } from "@/components/sections/CreditCard";
import { CryptoCurrencySection } from "@/components/sections/CryptoCurrencySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { StepSection } from "@/components/sections/StepSection";
import { TradingSection } from "@/components/sections/TradingSection";
import { getStaticProps } from "@/lib/fetchData";
import { Props } from "@/types";

import Head from "next/head";

export { getStaticProps };

export default function Home({
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
}: Props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="NEFA - Criptocurrency landing page" />
        <meta name="keywords" content="Criptocurrency landing page,NEFA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FFF" />
        <title>Nefa</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-touch-icon.png"
        />
      </Head>
      <Layout header={header} footer={footer}>
        <HeroSection hero={hero} />
        <CryptoCurrencySection coins={coins} />
        <BuyAndTradeSection buy={buy} />
        <PartnersSection partners={partners} />
        <CreditCard credit={credit} />
        <TradingSection trading={trading} />
        <SecuritySection security={security} />
        <StepSection step={step} />
        <FaqSection faq={faq} />
        <BackToTopSection />
      </Layout>
    </>
  );
}
