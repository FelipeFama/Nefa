import { motion } from "framer-motion";
import { illustrationsSteps, arrowSteps } from "../../data/steps";
import { slideIn } from "../../utils/motion";

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
                  src={illustrationsSteps.signUpImage.image.source}
                  alt={illustrationsSteps.signUpImage.image.alt}
                  className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                />
                <img
                  src={arrowSteps.arrowImage.image}
                  alt={arrowSteps.arrowImage.alt}
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
                  src={illustrationsSteps.walletImage.image}
                  alt={illustrationsSteps.walletImage.alt}
                  className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300"
                />
                <img
                  src={arrowSteps.arrowImage.image}
                  alt={arrowSteps.arrowImage.alt}
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
                  src={illustrationsSteps.okayImage.image}
                  alt={illustrationsSteps.okayImage.alt}
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
