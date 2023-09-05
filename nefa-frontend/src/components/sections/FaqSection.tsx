import React, { useState } from "react";
import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames";
import { Faq as FaqComponent } from "@/types/sections/faq";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface FaqProps {
  faq: FaqComponent[];
  open?: boolean;
  title?: string;
  children?: string;
}

const FaqItem = ({ open, title, children }: FaqProps) => {
  const [isOpen, setIsOpen] = useState(!!open);

  const iconClass = classNames({
    "transition-all duration-300": true,
    "rotate-180": isOpen,
  });

  const contentClass = classNames({
    "text-gray transition-all duration-300 overflow-hidden": true,
    "h-full": isOpen,
    "h-0": !isOpen,
  });

  return (
    <article className="mb-3 border-b border-lightgray pb-4">
      <aside
        className="flex justify-between py-3 cursor-pointer hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <BsChevronDown className={iconClass} />
      </aside>
      <aside className={contentClass}>
        <p className="select-none">{children}</p>
      </aside>
    </article>
  );
};

export function FaqSection({ faq }: FaqProps) {
  return (
    <motion.section
      className="container mx-auto py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      {faq.map((item, index) => (
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
          <article className="flex justify-center">
            <motion.div
              className="max-w-xl"
              variants={fadeIn("left", "tween", 0.3, 2)}
            >
              <span className="text-primary">{item.subtitle}</span>
              <h2 className="font-bold text-4xl mb-6 leading-normal">
                {item.title.text1}
              </h2>
              <div className="my-6">
                {item.articles.map((arr, index) => (
                  <FaqItem key={index} title={arr.title} faq={[]}>
                    {arr.content}
                  </FaqItem>
                ))}
              </div>
            </motion.div>
          </article>
        </div>
      ))}
    </motion.section>
  );
}
