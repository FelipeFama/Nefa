/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { logo } from "../../context/global";
import { SecondButton } from "../buttons/SecondButton";

export function Footer() {
  return (
    <footer className="px-28">
      <div className="container mx-auto border-y border-lightgray py-6">
        <div className="grid lg:grid-cols-4">
          <div className="xl:flex md:justify-between p-6 xl:border-r border-lightgray">
            <figure className="mb-6 -ml-12">
              <img
                src={logo.logoImage.image.source}
                alt={logo.logoImage.image.alt}
              />
            </figure>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Buy Crypto
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Watchlist
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Portfolio
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  NFT
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:flex md:justify-center p-6 xl:border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Products
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Abous Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="xl:flex md:justify-center p-6 xl:border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  System Status
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Area of Avaibility
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6 w-full">
            <span className="text-gray">Newsletter</span>
            <p className="text-gray font-thin w-80">
              Never miss anything crypto when you're on the go
            </p>
            <div className="flex gap-2 my-4">
              <input
                type="email"
                className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary"
                placeholder="Enter your email"
              />
              <SecondButton
                className="!px-5 aspect-square !rounded-xl"
                onClick={undefined}
              >
                <BsArrowRight />
              </SecondButton>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray text-center py-6">
        © Copyright 2022 NEFA LLC. All rights reserved
      </p>
    </footer>
  );
}
