import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { Security as SecurityComponent } from "@/types/sections/security";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface SecurityProps {
  security: SecurityComponent[];
}

export function SecuritySection({ security }: SecurityProps) {
  return (
    <motion.section
      className="container mx-auto py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      {security.map((item, index) => (
        <div key={index} className="grid lg:grid-cols-2">
          <motion.figure variants={fadeIn("right", "tween", 0.3, 2)}>
            <Image
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
            <div className="max-w-xl">
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                {item.title.text1}
              </h2>
              <ul className="my-6">
                {item.articles.map((arr, index) => (
                  <li key={index} className="mb-6">
                    <span>
                      <BsCheckCircleFill className="text-primary inline mr-2" />
                      {arr.span}
                    </span>
                    <p className="text-gray mt-3">{arr.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      ))}
    </motion.section>
  );
}
