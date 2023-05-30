import Link from "next/link";
import { Header as MenuComponent } from ".";
import { DropdownMenu } from "./DropdownMenu";

interface MenuProps {
  header: MenuComponent[];
}

export function Menu({ header }: MenuProps) {
  const item = header[0];
  const menuList = item.links;
  return (
    <>
      <ul className="flex md:gap-8 gap-4 max-lg:flex-col">
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            {menuList[0]}
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            {menuList[1]}
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            {menuList[2]}
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            {menuList[3]}
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            {menuList[4]}
          </Link>
        </li>
        <DropdownMenu className="" onClick={undefined}>
          <div className="py-4 max-md:-left-24">
            <Link
              className="hover:text-primary transition ease-in-out delay-100"
              href="#"
            >
              Exchanges
            </Link>
          </div>
          <div className="py-4 max-md:-left-24">
            <Link
              className="hover:text-primary transition ease-in-out delay-100"
              href="#"
            >
              Wallets
            </Link>
          </div>
        </DropdownMenu>
      </ul>
    </>
  );
}
