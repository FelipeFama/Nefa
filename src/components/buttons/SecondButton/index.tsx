import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
interface Props {
  children?: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export function SecondButton({
  children,
  className,
  onClick,
  ...props
}: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "text-white rounded-full py-3 px-6 md:py-4 md:px-10 bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-300 from-primary to-secondary hover:bg-blend-darken",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

SecondButton.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
  onclick: PropTypes.func,
};
