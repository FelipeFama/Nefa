import React from "react";
import { BsArrowUp } from "react-icons/bs";

export function BackToTopSection() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10">
      <div className="container mx-auto text-center py-6 flex justify-center">
        <button
          className="border border-[#DDDDDD] bg-[#FAFAFA] rounded-xl text-gray py-4 px-6 flex items-center justify-center gap-4"
          onClick={handleClick}
        >
          Back to top
          <BsArrowUp />
        </button>
      </div>
    </section>
  );
}
