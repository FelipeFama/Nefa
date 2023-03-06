/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { illustrationsPartners } from "../../data/illustrations";
import { slideIn } from "../../utils/motion";

export function PartnerSection() {
  return (
    <motion.section
      className="px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
    >
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto">
          <article className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">
              Trusted Partners Worldwide
            </h2>
            <p className="text-gray">
              We're partners with countless major organisations around the globe
            </p>
          </article>
          <div className="mx-4">
            <figure className="grid lg:grid-cols-4 grid-cols-1 justify-items-center gap-6">
              <motion.img
                src={illustrationsPartners.partnerOne.image}
                alt={illustrationsPartners.partnerOne.alt}
                className="basis-1/2"
                variants={slideIn("right", "spring", 0.2, 2)}
              />
              <motion.img
                src={illustrationsPartners.partnerTwo.image}
                alt={illustrationsPartners.partnerTwo.alt}
                className="basis-1/2"
                variants={slideIn("right", "spring", 0.2, 3)}
              />
              <motion.img
                src={illustrationsPartners.partnerThree.image}
                alt={illustrationsPartners.partnerThree.alt}
                className="basis-1/2"
                variants={slideIn("right", "spring", 0.2, 4)}
              />
              <motion.img
                src={illustrationsPartners.partnerFour.image}
                alt={illustrationsPartners.partnerFour.alt}
                className="basis-1/2"
                variants={slideIn("right", "spring", 0.2, 5)}
              />
            </figure>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
