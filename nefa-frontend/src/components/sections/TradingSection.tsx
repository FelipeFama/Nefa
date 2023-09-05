import React from "react";
import { SecondButton } from "../buttons/SecondButton";
import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { Trading as TradingComponent } from "@/types/sections/trading";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface TradingProps {
  trading: TradingComponent[];
}

export function TradingSection({ trading }: TradingProps) {
  return (
    <motion.section
      className="px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      {trading.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20"
        >
          <div className="grid lg:grid-cols-2 max-md:justify-items-center gap-6">
            <motion.div
              className="max-w-lg lg:row-start-1 ml-12"
              variants={fadeIn("right", "tween", 0.3, 2)}
            >
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                {item.title.text1}
                <span className="text-blue-gradient">{item.title.span}</span>
              </h2>
              {item.articles.map((arr, index) => (
                <article key={index} className="mb-6">
                  <h3 className="font-bold text-xl mb-4">{arr.title}</h3>
                  <p className="text-gray">{arr.description}</p>
                </article>
              ))}
              <SecondButton className={""} onClick={undefined}>
                Get Started
              </SecondButton>
              <a href="#" className="py-4 px-10 text-primary underline">
                Learn More
              </a>
            </motion.div>
            <motion.figure
              className="mb-8 row-start-1"
              variants={fadeIn("left", "tween", 0.3, 2)}
            >
              <Image
                // eslint-disable-next-line react-hooks/rules-of-hooks
                {...useNextSanityImage(client, item.image.asset._ref)}
                alt={item.image.alt}
                object-fit="cover"
                priority={false}
              />
            </motion.figure>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
