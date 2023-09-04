import { Footer } from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
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
import { Props } from "@/types";
import { getStaticProps } from "@/utils/fetchData";
import Head from "next/head";

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
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="description" content="NEFA - Criptocurrency landing page" />
        <meta name="keywords" content="Criptocurrency landing page,NEFA" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nefa</title>
      </Head>
      <Header header={header} />
      <main className="overflow-hidden">
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
      </main>
      <Footer footer={footer} />
    </>
  );
}

export { getStaticProps };
