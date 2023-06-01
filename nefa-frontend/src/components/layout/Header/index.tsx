import { FirstButton } from "@/components/buttons/FirstButton";
import { SecondButton } from "@/components/buttons/SecondButton";
import { client } from "@/lib/sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { Menu } from "./Menu";

export interface Header {
  image: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  links: string;
}

interface HeaderProps {
  header: Header[];
}

export default function Header({ header }: HeaderProps) {
  const item = header[0];
  return (
    <header className="fixed flex items-center justify-center py-6 transition-all duration-700 w-full z-10">
      <nav className="flex items-center gap-48 max-lg:w-full max-lg:justify-between md:gap-20">
        <div className="flex items-center">
          <figure className="sm:mx-8 m-auto">
            <Image
              // eslint-disable-next-line react-hooks/rules-of-hooks
              {...useNextSanityImage(client, item.image.asset._ref)}
              className="h-12 max-sm:mx-8 mr-8"
              alt={item.image.alt}
              width={150}
              height={100}
              priority={false}
            />
          </figure>
          <div className="xl:flex gap-8 hidden">
            <Menu header={header} />
          </div>
        </div>
        <div className="md:hidden sm:ml-80 text-2xl">
          <FirstButton className={""} onClick={undefined}>
            Log In
          </FirstButton>
          <SecondButton className={""} onClick={undefined}>
            Sign Up
          </SecondButton>
        </div>
      </nav>
    </header>
  );
}
