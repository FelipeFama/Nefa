import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  children?: React.ReactNode;
  className: string;
}

export default function DropdownMenu({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li className="flex align-center hover:text-primary transition ease-in-out delay-100">
        <a href="#" onClick={() => setOpen(!open)}>
          Products
        </a>
        <BsChevronDown className="m-auto h-3 w-8" />
      </li>
    </>
  );
}

DropdownMenu.propTypes = {
  children: PropTypes.node,
};
