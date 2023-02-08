import classNames from "classnames";
import Proptypes from "prop-types";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ReactOutsideClickHandler from "react-outside-click-handler";
interface Props {
  children?: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export default function DropdownMenu({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        className="flex align-center relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <a
          className="relative hover:text-primary transition ease-in-out delay-100 "
          href="#"
          onClick={() => setOpen(!open)}
        >
          Products
          <BsChevronDown className="absolute top-2 left-20 h-3 w-8" />
        </a>
        <ReactOutsideClickHandler onOutsideClick={() => open && setOpen(false)}>
          <div
            className={classNames(
              "lg:absolute top-full shadow-lg -left-1/2 -right-1/2 rounded-lg bg-white",
              {
                "max-lg:relative opacity-100 visible h-full lg:h-auto py-4 px-8 max-lg:top-12":
                  open,
                "opacity-0 invisible h-0": !open,
              },
            )}
          >
            {children}
          </div>
        </ReactOutsideClickHandler>
      </li>
    </>
  );
}

DropdownMenu.proptypes = {
  children: Proptypes.node,
};
