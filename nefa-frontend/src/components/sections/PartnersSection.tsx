import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { Partners as PartnersComponents } from "@/types/sections/partners";

interface PartnerProps {
  partners: PartnersComponents[];
}

export const PartnersSection = ({ partners }: PartnerProps) => {
  return (
    <section className="px-6">
      <div className="rounded-3xl  bg-[#F4F9FF]  py-20">
        <div className="container mx-auto">
          {partners.map((partner, index) => (
            <article className="text-center m-4" key={index}>
              <h2 className="text-3xl font-bold mb-4">{partner.title.text1}</h2>
              <p className="text-gray">{partner.description}</p>
              <div className="mx-4">
                <figure className="grid lg:grid-cols-4 grid-cols-1 justify-items-center gap-6">
                  {partner.partner.map((item, index) => (
                    <Image
                      key={index}
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, item.image.asset._ref)}
                      alt={item.image.alt}
                      object-fit="cover"
                      priority={false}
                    />
                  ))}
                </figure>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
