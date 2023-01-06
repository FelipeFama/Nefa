import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
interface Props {
  children?: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export function FirstButton({ children, className, onClick, ...props }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 rounded-full py-3 px-6 md:py-4 md:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

FirstButton.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onclick: PropTypes.func,
};
