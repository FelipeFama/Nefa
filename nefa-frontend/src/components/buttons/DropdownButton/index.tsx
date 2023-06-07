import { Transition } from "@headlessui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
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
      <FirstButton className={className} onClick={() => setIsOpen(!isOpen)}>
        {name}
        <BsChevronDown className="inline ml-2" />
      </FirstButton>
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute left-0 right-0 top-full z-[1] mt-2">
          <div className="border border-primary rounded-3xl bg-white shadow-xl overflow-hidden">
            {children}
          </div>
        </div>
      </Transition>
    </div>
  );
}
