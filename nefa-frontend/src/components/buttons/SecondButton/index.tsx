import classNames from "classnames";
import React from "react";

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
  const cx = classNames([
    "text-white rounded-full py-3 px-6 md:py-4 md:px-10 bg-gradient-to-br hover:bg-gradient-to-r transition-all duration-500 from-primary to-secondary hover:bg-blend-darken",
    className,
  ]);

  return (
    <button type="button" onClick={onClick} className={cx} {...props}>
      {children}
    </button>
  );
}
