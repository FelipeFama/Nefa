import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface DropdownMenuProps {
  children?: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Menu
      as="li"
      className={classNames("flex align-center relative", className)}
    >
      <Menu.Button
        as="a"
        href="#"
        className="relative hover:text-primary transition ease-in-out delay-100 "
        onClick={() => setOpen(!open)}
      >
        Products
        <BsChevronDown className="absolute top-2 left-20 h-3 w-8" />
      </Menu.Button>
      <Transition
        show={open}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items
          static
          className={classNames(
            "lg:absolute top-full shadow-lg -left-1/2 -right-1/2 rounded-lg bg-white my-4",
            {
              "max-lg:relative opacity-100 visible h-full lg:h-auto py-4 px-8 max-lg:top-12":
                open,
              "opacity-0 invisible h-0": !open,
            },
          )}
        >
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
