import React from "react";
import Layout from "../components/Layout";
import { HeroSection } from "../components/sections/HeroSection";
import { CryptoCurrencySection } from "../components/sections/CryptoCurrencySection";

export function Pages() {
  return (
    <>
      <Layout className={""}>
        <HeroSection />
        <CryptoCurrencySection />
      </Layout>
    </>
  );
}
