import React from "react";

export default function DropdownMenu() {
  return (
    <>
      <li className="flex align-center hover:text-primary transition ease-in-out delay-100">
        <a className="relative" href="#">
          <select className="border-none outline-none">
            <option>Products</option>
            <option>Exchange</option>
            <option>Wallet</option>
            <option>Explorer</option>
            <option>Charts</option>
          </select>
        </a>
      </li>
    </>
  );
}
