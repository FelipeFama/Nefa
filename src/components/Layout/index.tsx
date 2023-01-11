import React from "react";
import { Navbar } from "../Navbar";
interface Props {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
