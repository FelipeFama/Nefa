import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Transition } from "@headlessui/react";
import classNames from "classnames";

interface Props {
  onChange: (item: any) => void;
  value: string;
}

export function SelectCurrencyButton({ onChange, value = "BTC" }: Props) {
  const data = [
    {
      name: "BTC",
      code: "BTC",
      icon: "btc.svg",
    },
    {
      name: "USD",
      code: "USD",
      icon: "usd.svg",
    },
    {
      name: "ETH",
      code: "ETH",
      icon: "etherium.png",
    },
  ];

  const initialCoin = data.find(({ code }) => code === value);

  const [valueSelected, setValueSelected] = useState(initialCoin);
  const [isOpen, setIsOpen] = useState(false);

  const onChangeHandler = (item: any) => {
    setValueSelected(item);
    setIsOpen(false);
    onChange(item);
  };

  return (
    <div className="relative">
      <div
        className="border border-primary cursor-pointer rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <figure className="w-[26px] pr-2">
          <img
            src={valueSelected?.icon}
            alt={valueSelected?.name}
            className="flex items-center"
          />
        </figure>
        <span className="inline-block mr-2">{valueSelected?.name}</span>
        <BsChevronDown />
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="absolute top-full right-0 left-0 bg-white z-[2] mt-4 rounded-xl shadow-xl border border-primary overflow-hidden"
          >
            <div>
              {data.map((coin, i) => (
                <div
                  key={i}
                  className={classNames(
                    "py-2 flex items-center cursor-pointer hover:text-white select-none px-4 hover:bg-primary",
                    {
                      "bg-primary text-white":
                        coin.name === valueSelected?.name,
                    },
                  )}
                  onClick={() => onChangeHandler(coin)}
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
              ))}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
