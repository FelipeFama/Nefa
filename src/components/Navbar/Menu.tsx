import React from "react";
import DropdownMenu from "./DropdownMenu";

export function Menu() {
  return (
    <>
      <ul className="flex md:gap-8 gap-4 max-lg:flex-col">
        <li>
          <a
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Crytocurrency
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Exchanges
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Watchlist
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            NFT
          </a>
        </li>
        <li>
          <a
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Portfolio
          </a>
        </li>
        <DropdownMenu className={""} onClick={undefined}>
          <div className="py-4 max-md:-left-24">
            <a
              className="hover:text-primary transition ease-in-out delay-100"
              href="#"
            >
              Exchanges
            </a>
          </div>
          <div className="py-4 max-md:-left-24">
            <a
              className="hover:text-primary transition ease-in-out delay-100"
              href="#"
            >
              Wallets
            </a>
          </div>
        </DropdownMenu>
      </ul>
    </>
  );
}
