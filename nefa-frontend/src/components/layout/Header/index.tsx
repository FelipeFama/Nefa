import { FirstButton } from "@/components/buttons/FirstButton";
import { SecondButton } from "@/components/buttons/SecondButton";
import { client } from "@/lib/sanity";
import classNames from "classnames";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsList, BsX } from "react-icons/bs";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [backgroundWhite, setBackgroundWhite] = useState(false);

  const handleBlackScreenClick = (e: any) => {
    e.stopPropagation();
    setDropdownOpen(false);
  };

  useEffect(() => {
    setBackgroundWhite(dropdownOpen);
  }, [dropdownOpen]);

  const item = header[0];
  return (
    <header
      className={classNames(
        "fixed flex items-center justify-center py-6 transition-all duration-700 w-full z-10",
        {
          "bg-white shadow-lg": backgroundWhite,
        },
      )}
    >
      <nav className="flex items-center gap-48 max-lg:w-full max-lg:justify-between md:gap-20">
        <div className="flex items-center">
          <figure className="m-auto">
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
        <div className="hidden md:flex gap-3 mx-4">
          <FirstButton className={""} onClick={undefined}>
            Log In
          </FirstButton>
          <SecondButton className={""} onClick={undefined}>
            Sign Up
          </SecondButton>
        </div>
        <div className="md:hidden sm:ml-80 text-2xl">
          <button
            className="z-50 p-4 block transition-all"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <BsX /> : <BsList />}
          </button>
          {/* dropdown */}
          <div
            className={classNames({
              "text-base left-0 top-full right-0 absolute transition-all duration-400":
                true,
              "invisible opacity-0": !dropdownOpen,
              "visible opacity-100": dropdownOpen,
            })}
          >
            <div
              className="h-screen left-0 bg-black bg-opacity-30"
              onClick={handleBlackScreenClick}
            >
              <div className="z-20 shadow-xl bg-white p-6 relative">
                <div className="gap-4 flex mb-6">
                  <FirstButton className="w-full" onClick={undefined}>
                    Log In
                  </FirstButton>
                  <SecondButton className="w-full" onClick={undefined}>
                    Sign Up
                  </SecondButton>
                </div>
                <div className="mb-4">
                  <Menu header={header} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
