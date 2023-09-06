import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Props } from "@/types";

interface LayoutProps {
  children?: React.ReactNode;
  header?: Props["header"];
  footer?: Props["footer"];
}

export default function Layout({ header, footer, children }: LayoutProps) {
  return (
    <>
      <Header header={header} />
      <main className="overflow-hidden">{children}</main>
      <Footer footer={footer} />
    </>
  );
}
