import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { FaWindows, FaLinux, FaAppStore, FaAndroid } from "react-icons/fa";
import { DropdownButton } from "../buttons/DropdownButton";
import { SecondButton } from "../buttons/SecondButton";
import { Hero as HeroComponent } from "@/types/sections/hero";
import StarParticle from "../particles/StarParticle";
import BlueCircleParticle from "../particles/BlueCircleParticle";
import PurpleCircleParticle from "../particles/PurpleCircleParticle ";
import OrangeCircleParticle from "../particles/OrangeCircleParticle";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface HeroProps {
  hero: HeroComponent[];
}

export function HeroSection({ hero }: HeroProps) {
  const item = hero[0];
  const descriptionParts = item.description;

  return (
    <motion.section
      className="bg-primary bg-opacity-5 relative px-32 pt-72 pb-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="container grid lg:grid-cols-2 max-md:justify-items-center max-md:justify-center px-4 mx-auto">
        <article className="static">
          <motion.h6
            className="text-primary text-2xl"
            variants={fadeIn("right", "tween", 0.3, 2)}
          >
            {item.subtitle}
          </motion.h6>
          <StarParticle
            className="absolute top-36 right-2/4 w-32"
            particle={hero}
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal"
            variants={fadeIn("right", "tween", 0.3, 2)}
          >
            {item.title.text1}
            <br />
            <span className="text-blue-gradient">{item.title.span}</span>
            <br />
            {item.title.text2}
          </motion.h1>
          <motion.div
            className="mt-4 mb-8"
            variants={fadeIn("right", "tween", 0.3, 2)}
          >
            <p className="text-gray">{descriptionParts[0]}</p>
            <p className="text-gray">{descriptionParts[1]}</p>
          </motion.div>
          <motion.div
            className="col-span-2 lg:flex gap-4 lg:mb-12 w-max"
            variants={fadeIn("right", "tween", 0.3, 2)}
          >
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
          </motion.div>
          <PurpleCircleParticle
            className="absolute bottom-24 left-20"
            particle={hero}
          />
        </article>
        <motion.article className="hidden relative lg:block">
          <BlueCircleParticle
            className="absolute -top-24 left-32"
            particle={hero}
          />
          <motion.figure variants={fadeIn("left", "tween", 0.3, 2)}>
            <Image
              // eslint-disable-next-line react-hooks/rules-of-hooks
              {...useNextSanityImage(client, item.image.asset._ref)}
              alt={item.image.alt}
              object-fit="cover"
              priority={false}
            />
          </motion.figure>
          <OrangeCircleParticle
            className="absolute left-[95%] top-56"
            particle={hero}
          />
        </motion.article>
      </div>
    </motion.section>
  );
}
