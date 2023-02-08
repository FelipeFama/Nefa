import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import ReactOutsideClickHandler from "react-outside-click-handler";
import { FirstButton } from "../FirstButton";

interface Props {
  children?: React.ReactNode;
  className: string;
  name: string;
}

export function DropdownButton({ className, name, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <ReactOutsideClickHandler
        onOutsideClick={() => isOpen && setIsOpen(false)}
      >
        <FirstButton className={className} onClick={() => setIsOpen(!isOpen)}>
          {name}
          <BsChevronDown className="inline ml-2" />
        </FirstButton>
        <div
          data-testid="dropdown"
          className={classNames(
            "absolute left-0 right-0 top-full transition-all duration-200 z-[1] overflow-hidden mt-2 border border-primary rounded-3xl bg-white shadow-xl",
            {
              "opacity-100 visible": isOpen,
              "opacity-0 invisible": !isOpen,
            },
          )}
        >
          {children}
        </div>
      </ReactOutsideClickHandler>
    </div>
  );
}

DropdownButton.propTypes = {
  classNames: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
