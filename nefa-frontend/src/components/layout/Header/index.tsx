import Image from "next/image";

import { Menu } from "./Menu";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-48 max-lg:w-full max-lg:justify-between md:gap-20">
        <figure className="sm:mx-8 m-auto">
          <Image
            className="h-12 max-sm:mx-8 mr-8"
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </figure>
        <div className="xl:flex gap-8 hidden">
          <Menu />
        </div>
      </nav>
    </header>
  );
}
