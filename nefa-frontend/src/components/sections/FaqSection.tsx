import React, { useState } from "react";
import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { BsChevronDown } from "react-icons/bs";
import classNames from "classnames";

export interface Faq {
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  subtitle: string;
  title: {
    text1: string;
  };
  articles: {
    title: string;
    content: string;
  }[];
}

interface FaqProps {
  faq: Faq[];
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
    <section className="container mx-auto py-32">
      {faq.map((item, index) => (
        <div key={index} className="grid lg:grid-cols-2">
          <Image
            // eslint-disable-next-line react-hooks/rules-of-hooks
            {...useNextSanityImage(client, item.image.asset._ref)}
            alt={item.image.alt}
            object-fit="cover"
            priority={false}
          />
          <article className="flex justify-center">
            <div className="max-w-xl">
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
            </div>
          </article>
        </div>
      ))}
    </section>
  );
}
