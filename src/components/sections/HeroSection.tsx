import Fade from "react-reveal/Fade";
import { FaWindows, FaLinux, FaAppStore, FaAndroid } from "react-icons/fa";
import globeImg from "../../assets/images/illustrations/globe.png";
import { DropdownButton } from "../buttons/DropdownButton/DropdownButton";
import { SecondButton } from "../buttons/SecondButton";
import { BlueCircleParticle } from "../particles/BlueCircleParticle";
import { OrangeCircleParticle } from "../particles/OrangeCircleParticle";
import { PurpleCircleParticle } from "../particles/PurpleCircleParticle";
import { StarParticle } from "../particles/StarParticle";

const illustrations = {
  globeImage: {
    image: {
      source: globeImg,
      alt: "crypto globe",
    },
  },
};

export function HeroSection() {
  return (
    <section className="bg-primary bg-opacity-5 relative px-32 pt-72 pb-24">
      <div className="container grid md:grid-cols-2 px-4 mx-auto">
        <article>
          <h6 className="text-primary text-2xl">SIGN UP TODAY</h6>
          <StarParticle className="absolute top-36 right-2/4 w-32" />
          <h1 className="text-6xl font-bold leading-normal">
            The World’s
            <br />
            <span className="text-blue-gradient">Fastest Growing</span>
            <br />
            Crypto Web App
          </h1>
          <div className="mt-4 mb-8">
            <p className="text-gray">
              Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
            </p>
            <p className="text-gray">
              bank transfers or your credit/debit card.
            </p>
          </div>
          <div className="col-span-2 lg:flex gap-4 lg:mb-12">
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
          <PurpleCircleParticle className="absolute bottom-24 left-16" />
        </article>

        <figure className="hidden relative md:block">
          <BlueCircleParticle className="absolute -top-24 left-32" />
          <Fade top duration={3000}>
            <img
              src={illustrations.globeImage.image.source}
              alt={illustrations.globeImage.image.alt}
            />
          </Fade>
          <OrangeCircleParticle className="absolute left-full top-56" />
        </figure>
      </div>
    </section>
  );
}
