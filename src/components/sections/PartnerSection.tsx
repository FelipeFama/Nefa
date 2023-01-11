/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { partners } from "../../context/global";

export function PartnerSection() {
  return (
    <section className="px-6">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto">
          <article className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">
              Trusted Partners Worldwide
            </h2>
            <p className="text-gray">
              We're partners with countless major organisations around the globe
            </p>
          </article>
          <div className="mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <img
                src={partners.partnerOne.image}
                alt={partners.partnerOne.alt}
                className="basis-1/2"
              />
              <img
                src={partners.partnerTwo.image}
                alt={partners.partnerTwo.alt}
                className="basis-1/2"
              />
              <img
                src={partners.partnerThree.image}
                alt={partners.partnerThree.alt}
                className="basis-1/2"
              />
              <img
                src={partners.partnerFour.image}
                alt={partners.partnerFour.alt}
                className="basis-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}