import React from "react";
import emoji from "react-easy-emoji";
import {BsChevronRight} from "react-icons/bs";

export default function CryptocurrencySection() {
  return (
    <section className="-mt-8">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow">
        <div className="grid grid-cols-3">
         <div className="px-4">
          <div className="flex justify-between">
            <span className="font-bold text-lg">{emoji("🔥 Trending")}</span>
            <a href="" className="text-primary">
              More
              <BsChevronRight className="inline ml-2" />
            </a>
          </div>
         </div>
         <div className="px-4">ok</div>
         <div className="px-4">ok</div>
       </div>
      </div>
    </section>
  )
}