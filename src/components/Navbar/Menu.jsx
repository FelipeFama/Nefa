import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function Menu() {
  return (
    <>
      <div className="w-full">
        <ul className="w-full h-auto flex flex-col flex-grow lg:items-center pb-4 lg:pb-0 lg:justify-end lg:flex-row origin-top duration-300 xl:space-x-2 space-y-3 lg:space-y-0 hidden lg:flex">
          <li className="w-full">
            <a
              href="#"
              className="md:px-4 py-2 bg-transparent rounded-lg hover:text-primary text-lg"
            >
              Cryptocurrency
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="md:px-4 py-2 bg-transparent rounded-lg hover:text-primary text-lg"
            >
              Exchanges
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="md:px-4 py-2 bg-transparent rounded-lg hover:text-primary text-lg"
            >
              Watchlist
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="md:px-4 py-2 bg-transparent rounded-lg hover:text-primary text-lg"
            >
              NFT
            </a>
          </li>
          <li className="w-full">
            <a
              href="#"
              className="md:px-4 py-2 bg-transparent rounded-lg hover:text-primary text-lg"
            >
              Portofolios
            </a>
          </li>
          <DropdownMenu>
            <li className="w-full">
              <a href="#" className="hover:text-primary py-2 block">
                Portfolios
              </a>
            </li>
            <li className="w-full">
              <a href="#" className="hover:text-primary py-2 block">
                Portfolios
              </a>
            </li>
          </DropdownMenu>
        </ul>
      </div>
    </>
  );
}
