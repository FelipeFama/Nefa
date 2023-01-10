import React, { useState } from "react";
import classNames from "classnames";
import { Navbar } from "../Navbar";
interface Props {
  children?: React.ReactNode;
  className: string;
}

export default function Layout({ children }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownClass = classNames({
    "text-base left-0 top-full right-0 absolute transition-all duration-400":
      true,
    "invisible opacity-0": !dropdownOpen,
    "visible opacity-100": dropdownOpen,
  });

  return (
    <>
      <header
        className={`flex items-center py-10 relative transition-all duration-400 ${
          dropdownOpen ? "bg-white" : "bg-primary"
        } bg-opacity-5`}
      >
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
