import React from "react";
import Layout from "../components/Layout";
import { HeroSection } from "../components/sections/HeroSection";
import { CryptoCurrencySection } from "../components/sections/CryptoCurrencySection";
import { BuyAndTradeSection } from "../components/sections/BuyAndTradeSection";
import { PartnerSection } from "../components/sections/PartnerSection";
import { CreditCardSection } from "../components/sections/CreditCardSection";
import { TradingToolsSection } from "../components/sections/TradingToolsSection";
import { SecuritySection } from "../components/sections/SecuritySection";
import { StepSection } from "../components/sections/StepSection";
import { FaqSections } from "../components/sections/FaqSections";
import { BackToTopSection } from "../components/sections/BackToTopSection";

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
        <StepSection />
        <FaqSections />
        <BackToTopSection />
      </Layout>
    </>
  );
}
