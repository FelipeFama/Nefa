import React from "react";
import Layout from "../components/Layout";
import { HeroSection } from "../components/sections/HeroSection";
import { CryptoCurrencySection } from "../components/sections/CryptoCurrencySection";
import { BuyAndTradeSection } from "../components/sections/BuyAndTradeSection";
import { PartnerSection } from "../components/sections/PartnerSection";
import { CreditCardSection } from "../components/sections/CreditCardSection";
import { TradingToolsSection } from "../components/sections/TradingToolsSection";
import { SecuritySection } from "../components/sections/SecuritySection";

export function Pages() {
  return (
    <>
      <Layout>
        <HeroSection />
        <CryptoCurrencySection />
        <BuyAndTradeSection />
        <PartnerSection />
        <CreditCardSection />
        <TradingToolsSection />
        <SecuritySection />
      </Layout>
    </>
  );
}
