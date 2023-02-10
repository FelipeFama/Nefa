import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import creditCardImg from "../../assets/images/illustrations/credit-card.png";
import { fadeIn } from "../../utils/motion";
import { FirstButton } from "../buttons/FirstButton";

const illustrations = {
  creditCardImage: {
    image: {
      source: creditCardImg,
      alt: "credit card",
    },
  },
};

export function CreditCardSection() {
  return (
    <motion.section
      className="container mx-auto py-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <figure className="mb-12 px-4 md:px-4">
          <motion.img
            variants={fadeIn("right", "tween", 0.3, 2)}
            src={illustrations.creditCardImage.image.source}
            alt={illustrations.creditCardImage.image.alt}
          />
        </figure>
        <motion.article
          className="flex justify-center"
          variants={fadeIn("left", "tween", 0.3, 2)}
        >
          <div className="max-w-md">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Introducing the <span className="text-blue-gradient">NEFA</span>
              <br />
              Credit Card
            </h2>
            <p className="text-gray">
              Subject to cardholder and rewards terms which will be available
              <br />
              at application.
            </p>
            <ul className="my-6">
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                Up to 3% back on purchases
              </li>
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                Earn rewards in bitcoin or any crypto on NEFA
              </li>
              <li className="mb-2">
                <BsCheckCircleFill className="text-primary inline mr-2" />
                No annual fee
              </li>
            </ul>
            <FirstButton className={""} onClick={undefined}>
              Join the waitlist
            </FirstButton>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
}
