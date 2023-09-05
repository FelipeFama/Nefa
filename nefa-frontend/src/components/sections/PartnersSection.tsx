import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { Partners as PartnersComponents } from "@/types/sections/partners";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

interface PartnerProps {
  partners: PartnersComponents[];
}

export const PartnersSection = ({ partners }: PartnerProps) => {
  return (
    <motion.section
      className="px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="rounded-3xl  bg-[#F4F9FF]  py-20">
        <div className="container mx-auto">
          {partners.map((partner, index) => (
            <article className="text-center m-4" key={index}>
              <h2 className="text-3xl font-bold mb-4">{partner.title.text1}</h2>
              <p className="text-gray">{partner.description}</p>
              <article className="mx-4">
                <div className="grid lg:grid-cols-4 grid-cols-1 justify-items-center gap-6">
                  {partner.partner.map((item, index) => (
                    <motion.figure
                      variants={
                        index === 0
                          ? slideIn("right", "spring", 0.2, 2)
                          : index === 1
                          ? slideIn("right", "spring", 0.2, 3)
                          : index === 2
                          ? slideIn("right", "spring", 0.2, 4)
                          : slideIn("right", "spring", 0.2, 5)
                      }
                      key={index}
                    >
                      <Image
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        {...useNextSanityImage(client, item.image.asset._ref)}
                        alt={item.image.alt}
                        object-fit="cover"
                        priority={false}
                      />
                    </motion.figure>
                  ))}
                </div>
              </article>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
