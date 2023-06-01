import classNames from "classnames";
import React from "react";

interface Props {
  children?: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function FirstButton({ children, className, onClick, ...props }: Props) {
  const cx = classNames([
    "border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500 rounded-full py-3 px-6 md:py-4 md:px-10",
    className,
  ]);

  return (
    <button type="button" onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}
