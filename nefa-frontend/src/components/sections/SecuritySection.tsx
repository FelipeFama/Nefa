import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { Security as SecurityComponent } from "@/types/sections/security";

interface SecurityProps {
  security: SecurityComponent[];
}

export function SecuritySection({ security }: SecurityProps) {
  return (
    <section className="container mx-auto py-32">
      {security.map((item, index) => (
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
          </article>
        </div>
      ))}
    </section>
  );
}
