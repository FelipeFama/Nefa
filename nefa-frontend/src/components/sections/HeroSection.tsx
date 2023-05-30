import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export interface Hero {
  title: {
    span: string;
    text1: string;
    text2: string;
  };
  subtitle: string;
  description: string;
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
}

interface HeroProps {
  hero: Hero[];
}

export default function HeroSection({ hero }: HeroProps) {
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
            width={500}
            height={500}
            priority={false}
          />
        </figure>
      </div>
    </section>
  );
}
