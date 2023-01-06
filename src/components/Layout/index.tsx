import React from "react";
import { Navbar } from "../Navbar";
interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <header className="flex items-center mx-10 px-4 py-10">
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
