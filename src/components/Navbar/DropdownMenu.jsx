import React, { useState } from "react";
import classNames from "classnames";
import { BsChevronDown } from "react-icons/bs";

export default function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="w-full relative">
      <span
        className="hover:text-primary py-2 cursor-pointer flex items-center justify-between text-lg"
        onClick={() => setOpen(!open)}
      >
        Product
        <BsChevronDown className="inline ml-2" />
      </span>
      <li
        className={classNames(
          "lg:absolute top-full shadow-lg rounded-lg bg-white",
          {
            "opacity-100 visible h-full lg:h-auto py-4 px-1": open,
            "opacity-0 invisible h-0": !open
          }
        )}
      >
        {children}
      </li>
    </li>
  );
}
