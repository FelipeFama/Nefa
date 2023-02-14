import { motion } from "framer-motion";
import buyImg from "../../assets/images/illustrations/buy.png";
import { fadeIn } from "../../utils/motion";
import { Select } from "../Select";
import { SecondButton } from "../buttons/SecondButton";

const illustrations = {
  buyImage: {
    image: {
      source: buyImg,
      alt: "buy crypto",
    },
  },
};

const formHandler = (e: any) => {
  e.preventDefault();
};

const inputChangeHandler = (e: any) => {
  console.log(e.target.value);
};

export function BuyAndTradeSection() {
  return (
    <motion.section
      className="container mx-auto mt-24 flex items-center lg:px-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="grid lg:grid-cols-2 gap-10 px-16 lg:p-12">
        <div className="flex items-center md:justify-center">
          <motion.div
            className="max-w-xl"
            variants={fadeIn("right", "tween", 0.2, 2)}
          >
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Buy & trade on the <br /> original crypto exchange.
            </h2>
            <p className="text-gray mb-6">
              Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
              Crypto Coin. We accept BTC crypto-currency
            </p>
            <form onSubmit={formHandler}>
              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center">
                  <div className="border-r border-primary pr-4 md:pr-6">
                    <small className="text-primary">Amount</small>
                  </div>
                  <input
                    type="text"
                    value="5,000"
                    onChange={inputChangeHandler}
                    className="text-right outline-none w-full"
                  />
                </div>
                <Select value="USD" onChange={undefined} />
              </div>

              <div className="flex justify-between gap-4 md:gap-6 mb-6">
                <div className="border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full">
                  <div className="border-r border-primary pr-4 md:pr-14">
                    <small className="text-primary">Get</small>
                  </div>
                  <input
                    type="text"
                    value="0.10901"
                    onChange={inputChangeHandler}
                    className="text-right outline-none w-full"
                  />
                </div>
                <Select value="BTC" onChange={undefined} />
              </div>
            </form>
            <SecondButton className="w-full" onClick={undefined}>
              Buy Now
            </SecondButton>
          </motion.div>
        </div>
        <figure className="row-start-1 xl:col-start-2">
          <motion.img
            variants={fadeIn("left", "tween", 0.3, 2)}
            src={illustrations.buyImage.image.source}
            alt={illustrations.buyImage.image.alt}
          />
        </figure>
      </div>
    </motion.section>
  );
}
