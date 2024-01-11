import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";

interface Coin {
  name: string;
  code: string;
  icon: string;
  alt: string;
}

interface Props {
  onChange: (item: Coin) => void;
  value: string;
}

export function SelectCurrencyButton({ onChange, value = "" }: Props) {
  const data: Coin[] = [
    {
      name: "BTC",
      code: "BTC",
      icon: "btc.svg",
      alt: "Bitcoin",
    },
    {
      name: "USD",
      code: "USD",
      icon: "usd.svg",
      alt: "Dollar",
    },
    {
      name: "ETH",
      code: "ETH",
      icon: "Etherium.png",
      alt: "Etherium",
    },
  ];

  const initialCoin = data.find(({ code }) => code === value);

  const [valueSelected, setValueSelected] = useState<Coin | undefined>(
    initialCoin,
  );

  const onChangeHandler = (item: Coin) => {
    setValueSelected(item);
    onChange(item);
  };

  return (
    <Menu>
      {({ open }) => (
        <div className="relative">
          <Menu.Button className="border border-primary cursor-pointer rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
            <figure className="w-[26px] pr-2">
              <img
                src={valueSelected?.icon}
                alt={valueSelected?.alt}
                className="flex items-center"
              />
            </figure>
            <span className="inline-block mr-2">{valueSelected?.name}</span>
            <BsChevronDown />
          </Menu.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            className="relative z-[2]"
          >
            <Menu.Items
              static
              className={classNames(
                "absolute top-full right-0 -left-[1px] bg-white mt-4 rounded-xl shadow-xl border border-primary overflow-hidden",
                {
                  invisible: !open,
                  "opacity-0": !open,
                  visible: open,
                  "opacity-100": open,
                },
              )}
            >
              <div>
                {data.map((coin, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          "py-2 flex items-center cursor-pointer hover:text-white select-none px-4 hover:bg-primary",
                          {
                            "bg-primary text-white":
                              coin.name === valueSelected?.name || active,
                          },
                        )}
                        onClick={() => {
                          onChangeHandler(coin);
                          open = false;
                        }}
                      >
                        <figure className="h-[26px] aspect-square pr-2">
                          <img
                            src={coin.icon}
                            alt={coin.name}
                            className="flex items-center"
                          />
                        </figure>
                        <span className="inline-block mr-2">{coin.name}</span>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
