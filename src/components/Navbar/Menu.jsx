import React, {useState} from "react";
export default function Menu() {
  return (
   <>
     <div className='hidden md:flex'>
       <a href="/" className='mx-6 hover:text-primary'>Cryptocurrency</a>
       <a href="/" className='mx-6 hover:text-primary'>Exchanges</a>
       <a href="/" className='mx-6 hover:text-primary'>Watchlist</a>
       <a href="/" className='mx-6 hover:text-primary'>NFT</a>
       <a href="/" className='mx-6 hover:text-primary'>Portofolios</a>
       <a href="/" className='mx-6 hover:text-primary'>
        Product
        <BsChevronDown className="inline ml-2" />
       </a>
     </div>
   </>
  );
}