import React from "react";
import DropdownMenu from "./DropdownMenu";

export function Menu() {
  return (
    <>
      <ul className="flex gap-8">
        <li className="hover:text-primary transition ease-in-out delay-100">
          <a href="#">Crytocurrency</a>
        </li>
        <li className="hover:text-primary transition ease-in-out delay-100">
          <a href="#">Exchanges</a>
        </li>
        <li className="hover:text-primary transition ease-in-out delay-100">
          <a href="#">Watchlist</a>
        </li>
        <li className="hover:text-primary transition ease-in-out delay-100">
          <a href="#">NFT</a>
        </li>
        <li className="hover:text-primary transition ease-in-out delay-100">
          <a href="#">Portfolio</a>
        </li>
        <DropdownMenu className={""}></DropdownMenu>
      </ul>
    </>
  );
}
