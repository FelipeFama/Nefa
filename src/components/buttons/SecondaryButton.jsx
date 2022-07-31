import classNames from 'classnames';
import React from "react";

export default function SecondaryButton({children, className, onClick, ...props}) {
  const cx = classNames([
    "bg-primary text-white rounded-full py-3 px-6 md:py-4 md:px-10  text-sm",
    className
  ])
  return (
    <button onClick={onClick} 
     className= {cx} 
     {...props}>
      {children}
    </button>
  );
}
