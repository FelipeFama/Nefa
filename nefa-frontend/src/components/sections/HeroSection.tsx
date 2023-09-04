import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { FaWindows, FaLinux, FaAppStore, FaAndroid } from "react-icons/fa";
import { DropdownButton } from "../buttons/DropdownButton";
import { SecondButton } from "../buttons/SecondButton";
import { Hero as HeroComponent } from "@/types/sections/hero";

interface HeroProps {
  hero: HeroComponent[];
}

export function HeroSection({ hero }: HeroProps) {
  const item = hero[0];
  const descriptionParts = item.description;

  return (
    <section className="bg-primary bg-opacity-5 relative px-32 pt-72 pb-24">
      <div className="container grid lg:grid-cols-2 max-md:justify-items-center max-md:justify-center px-4 mx-auto">
        <article className="static">
          <h6 className="text-primary text-2xl">{item.subtitle}</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal">
            {item.title.text1}
            <br />
            <span className="text-blue-gradient">{item.title.span}</span>
            <br />
            {item.title.text2}
          </h1>
          <div className="mt-4 mb-8">
            <p className="text-gray">{descriptionParts[0]}</p>
            <p className="text-gray">{descriptionParts[1]}</p>
          </div>
        </article>
        <figure className="hidden relative lg:block">
          <Image
            // eslint-disable-next-line react-hooks/rules-of-hooks
            {...useNextSanityImage(client, item.image.asset._ref)}
            alt={item.image.alt}
            width={800}
            height={800}
            priority={false}
          />
        </figure>
      </div>
      <div className="col-span-2 lg:flex gap-4 lg:mb-12 w-max">
        <SecondButton className="w-full lg:w-auto mb-2" onClick={undefined}>
          Get Started
        </SecondButton>
        <DropdownButton name="Download App" className="w-full lg:w-auto">
          <a
            href="/download/windows"
            target="_blank"
            className="w-full hover:bg-primary px-6 pt-4 pb-2 block hover:text-white"
          >
            <FaWindows className="inline mr-2" /> Windows
          </a>
          <a
            href="/download/linux"
            target="_blank"
            className="w-full hover:bg-primary px-6 pt-4 pb-2 block hover:text-white"
          >
            <FaLinux className="inline mr-2" /> Linux
          </a>
          <a
            href="/download/android"
            target="_blank"
            className="w-full hover:bg-primary px-6 pt-4 pb-2 block hover:text-white"
          >
            <FaAndroid className="inline mr-2" /> Android
          </a>
          <a
            href="/download/ios"
            target="_blank"
            className="w-full hover:bg-primary px-6 pt-4 pb-2 block hover:text-white"
          >
            <FaAppStore className="inline mr-2" /> IOS
          </a>
        </DropdownButton>
      </div>
    </section>
  );
}
