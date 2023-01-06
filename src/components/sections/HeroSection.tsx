import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { illustrations } from "../../context/useSections";
import { FirstButton } from "../buttons/FirstButton";
import { SecondButton } from "../buttons/SecondButton";

export function HeroSection() {
  return (
    <section className="bg-primary bg-opacity-5 relative pt-[140px] pb-24">
      <div className="container grid md:grid-cols-2 px-4 mx-auto">
        <article>
          <h6 className="text-primary text-2xl">SIGN UP TODAY</h6>
          <h1 className="text-6xl font-bold leading-normal">
            The World’s
            <br />
            <span className="text-blue-gradient">Fastest Growing</span>
            <br />
            Crypto Web App
          </h1>
          <div className="mt-4 mb-8">
            <p className="text-gray">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
            </p>
            <p className="text-gray">
              bank transfers or your credit/debit card.
            </p>
          </div>
          <div className="col-span-2 lg:flex gap-4 lg:mb-12">
            <SecondButton className="w-full lg:w-auto mb-2" onClick={undefined}>
              Get Started
            </SecondButton>
            <FirstButton className={""} onClick={undefined}>
              Download App
              <BsChevronDown className="m-auto h-3 w-8" />
            </FirstButton>
          </div>
        </article>
        <figure className="hidden relative md:block">
          <img
            src={illustrations.globeImage.image.source}
            alt={illustrations.globeImage.image.alt}
          />
        </figure>
      </div>
    </section>
  );
}
