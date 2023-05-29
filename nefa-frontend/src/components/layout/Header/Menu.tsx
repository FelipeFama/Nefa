import Link from "next/link";
import { DropdownMenu } from "./DropdownMenu";

export function Menu() {
  return (
    <>
      <ul className="flex md:gap-8 gap-4 max-lg:flex-col">
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Crytocurrency
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Exchanges
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Watchlist
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            NFT
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-primary transition ease-in-out delay-100"
            href="#"
          >
            Portfolio
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
