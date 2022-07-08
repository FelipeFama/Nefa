import React from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import BuyAndTradeSection from "../components/sections/BuyAndTradeSection";
import CryptocurrencySection from "../components/sections/CryptocurrencySection";
import HeroSection from "../components/sections/HeroSection";


export default function index() {
  return (
    <Layout>
     <HeroSection />
     <CryptocurrencySection />
     <BuyAndTradeSection />
     <Footer />
    </Layout>
  );
}