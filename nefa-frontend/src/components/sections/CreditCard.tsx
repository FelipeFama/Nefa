import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FirstButton } from "../buttons/FirstButton";
import { Credit as CreditComponent } from "@/types/sections/credit";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface CreditProps {
  credit: CreditComponent[];
}

export function CreditCard({ credit }: CreditProps) {
  return (
    <motion.section
      className="container mx-auto py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {credit.map((item, index) => (
          <React.Fragment key={index}>
            <motion.figure
              className="mb-12 px-4 md:px-4"
              variants={fadeIn("right", "tween", 0.3, 2)}
            >
              <Image
                key={index}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                {...useNextSanityImage(client, item.image.asset._ref)}
                alt={item.image.alt}
                object-fit="cover"
                priority={false}
              />
            </motion.figure>
            <motion.article
              className="flex justify-center"
              variants={fadeIn("left", "tween", 0.3, 2)}
            >
              <div className="max-w-md">
                <h2 className="font-bold text-4xl mb-6 leading-normal">
                  {item.title.text1}
                  <span className="text-blue-gradient">{item.title.span}</span>
                  {item.title.text2}
                </h2>
                <p className="text-gray">
                  {item.subtitle.text1}
                  <span>{item.subtitle.span}</span>
                </p>
                <ul className="my-6">
                  {item.list.map((arr, index) => (
                    <li key={index} className="mb-2">
                      <BsCheckCircleFill className="text-primary inline mr-2" />
                      {arr}
                    </li>
                  ))}
                </ul>
                <FirstButton className={""} onClick={undefined}>
                  Join the waitlist
                </FirstButton>
              </div>
            </motion.article>
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
