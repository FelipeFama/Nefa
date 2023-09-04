import React from "react";
import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { Step as StepComponent } from "@/types/sections/step";

interface StepProps {
  step: StepComponent[];
}

export function StepSection({ step }: StepProps) {
  return (
    <section className="px-8">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        {step.map((item, index) => (
          <div key={index} className="container mx-auto text-center">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              {item.title.text1}
            </h2>
            <div className="lg:flex grid justify-center gap-24">
              {item.article.map((arr, index) => (
                <article key={index} className="text-center relative px-4 mx-2">
                  <figure className="relative mx-2">
                    <Image
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      {...useNextSanityImage(client, arr.image.asset._ref)}
                      alt={arr.image.alt}
                      object-fit="cover"
                      priority={false}
                      className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                    />
                    {index < 2 && (
                      <Image
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        {...useNextSanityImage(
                          client,
                          item.arrowImage.asset._ref,
                        )}
                        alt={item.arrowImage.alt}
                        object-fit="cover"
                        priority={false}
                        className="hidden lg:block absolute top-1/2 -right-40"
                      />
                    )}
                  </figure>
                  <h3 className="text-2xl font-bold mb-4">{arr.title}</h3>
                  <p className="text-gray max-w-sm">{arr.content}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
