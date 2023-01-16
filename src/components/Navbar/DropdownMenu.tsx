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
      <li className="flex align-center hover:text-primary transition ease-in-out delay-100 relative">
        <a className="relative" href="#" onClick={() => setOpen(!open)}>
          Products
        </a>
        <BsChevronDown className="m-auto h-3 w-8" />
        <ReactOutsideClickHandler onOutsideClick={() => open && setOpen(false)}>
          <div
            className={classNames(
              "lg:absolute top-full -right-4 shadow-lg rounded-lg",
              {
                "opacity-100 visible h-full lg:h-auto py-4 px-5": open,
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
