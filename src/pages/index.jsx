import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import BuyAndTradeSection from "../components/sections/BuyAndTradeSection";
import CreditCardSection from "../components/sections/CreditCardSection";
import CryptocurrencySection from "../components/sections/CryptocurrencySection";
import HeroSection from "../components/sections/HeroSection";
import PartnerSection from "../components/sections/PartnerSection";
import SecuritySection from "../components/sections/SecuritySection";
import StepSection from "../components/sections/StepSection";
import TradingToolsSection from "../components/sections/TradingToolsSection";

export default function index() {
  return (
    <Layout>
     <HeroSection />
     <CryptocurrencySection />
     <BuyAndTradeSection />
     <PartnerSection />
     <CreditCardSection />
     <TradingToolsSection />
     <SecuritySection />
     <StepSection />
     <Footer />
    </Layout>
  );
}