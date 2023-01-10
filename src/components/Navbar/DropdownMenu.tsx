import React, { useState } from "react";
import classNames from "classnames";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  children?: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function DropdownMenu({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="flex align-center hover:text-primary transition ease-in-out delay-100 relative">
        <a className="relative" href="#" onClick={() => setOpen(!open)}>
          Products
        </a>
        <BsChevronDown className="m-auto h-3 w-8" />
        <div
          className={classNames("lg:absolute top-full shadow-lg rounded-lg", {
            "opacity-100 visible h-full lg:h-auto py-4 px-5": open,
            "opacity-0 invisible h-0": !open,
          })}
        >
          {children}
        </div>
      </li>
    </>
  );
}
