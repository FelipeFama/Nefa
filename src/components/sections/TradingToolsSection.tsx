import { motion } from "framer-motion";
import tradingToolImg from "../../assets/images/illustrations/tradingtools.png";
import { fadeIn } from "../../utils/motion";
import { SecondButton } from "../buttons/SecondButton";

const illustrations = {
  tradingToolImage: {
    image: {
      source: tradingToolImg,
      alt: "trading tool",
    },
  },
};

export function TradingToolsSection() {
  return (
    <motion.section
      className="px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="grid md:grid-cols-2 max-md:justify-items-center gap-6">
          <motion.div
            className="max-w-lg"
            variants={fadeIn("left", "tween", 0.3, 2)}
          >
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Advanced Trading <span className="text-blue-gradient">Tools</span>
            </h2>
            <article className="mb-6">
              <h3 className="font-bold text-xl mb-4">
                Professional Access, Non-stop Availability
              </h3>
              <p className="text-gray">
                We provide premium access to crypto trading for both individuals
                and institutions through high liquidity, reliable order
                execution and constant uptime.
              </p>
            </article>
            <article className="mb-6">
              <h3 className="font-bold text-xl mb-4">
                A Range of Powerful Apis
              </h3>
              <p className="text-gray">
                Set up your own trading interface or deploy your algorithmic
                strategy with our high-performance FIX and HTTP APIs. Connect to
                our WebSocket for real-time data streaming.
              </p>
            </article>
            <article className="mb-6">
              <h3 className="font-bold text-xl mb-4">Customer Support</h3>
              <p className="text-gray">
                Premium 24/7 support available to all customers worldwide by
                phone or email. Dedicated account managers for partners.
              </p>
            </article>
            <SecondButton className={""} onClick={undefined}>
              Get Started
            </SecondButton>
            <a href="#" className="py-4 px-10 text-primary underline">
              Learn More
            </a>
          </motion.div>
          <figure className="row-start-1 mb-8">
            <motion.img
              variants={fadeIn("right", "tween", 0.3, 2)}
              src={illustrations.tradingToolImage.image.source}
              alt={illustrations.tradingToolImage.image.alt}
            />
          </figure>
        </div>
      </div>
    </motion.section>
  );
}
