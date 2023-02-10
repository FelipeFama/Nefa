import { motion } from "framer-motion";
import arrowImg from "../../assets/images/arrow.svg";
import okayImg from "../../assets/images/illustrations/okay.png";
import signUpImg from "../../assets/images/illustrations/signup.png";
import walletImg from "../../assets/images/illustrations/wallet.png";
import { slideIn } from "../../utils/motion";

const arrow = {
  arrowImage: {
    image: arrowImg,
    alt: "arrow",
  },
};

const illustrations = {
  signUpImage: {
    image: {
      source: signUpImg,
      alt: "mouse clicking on cryptocurrency",
    },
  },
  walletImage: {
    image: walletImg,
    alt: "cryptocurrency wallet",
  },
  okayImage: {
    image: okayImg,
    alt: "hand holding cryptocurrency",
  },
};

export function StepSection() {
  return (
    <motion.section
      className="px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Get started in just a few minutes
          </h2>
          <div className="lg:flex grid justify-center gap-24">
            <motion.article
              className="text-center relative px-4 mx-2"
              variants={slideIn("right", "spring", 0.2, 3)}
            >
              <figure className="relative mx-2">
                <img
                  src={illustrations.signUpImage.image.source}
                  alt={illustrations.signUpImage.image.alt}
                  className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                />
                <img
                  src={arrow.arrowImage.image}
                  alt={arrow.arrowImage.alt}
                  className="hidden lg:block absolute top-1/2 -right-40"
                />
              </figure>
              <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
              <p className="text-gray max-w-sm">
                Buy Bitcoin or Ethereum, then securely store it in your Wallet
                or send it on easily to friends
              </p>
            </motion.article>

            <motion.article
              className="text-center relative px-4 mx-2"
              variants={slideIn("right", "spring", 0.2, 4)}
            >
              <figure className="relative mx-2">
                <img
                  src={illustrations.walletImage.image}
                  alt={illustrations.walletImage.alt}
                  className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                />
                <img
                  src={arrow.arrowImage.image}
                  alt={arrow.arrowImage.alt}
                  className="hidden lg:block absolute top-1/2 -right-40"
                />
              </figure>
              <h3 className="text-2xl font-bold mb-4">Fund</h3>
              <p className="text-gray max-w-sm">
                Choose your preferred payment method such as bank transfer or
                credit card to top up your NEFA Wallet
              </p>
            </motion.article>

            <motion.article
              className="text-center relative px-4 mx-2"
              variants={slideIn("right", "spring", 0.2, 5)}
            >
              <figure className="relative mx-2">
                <img
                  src={illustrations.okayImage.image}
                  alt={illustrations.okayImage.alt}
                  className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                />
              </figure>
              <h3 className="text-2xl font-bold mb-4">Buy Crypto</h3>
              <p className="text-gray max-w-sm">
                Sign up for your free NEFA Wallet on web, iOS or Android and
                follow our easy process to set up your profile
              </p>
            </motion.article>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
