import classNames from "classnames";
import { motion } from "framer-motion";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import starCircle from "../../assets/images/particles/star1.svg";
import { fadeIn } from "../../utils/motion";
interface classProps {
  className: string;
}
export function StarParticle({ className }: classProps) {
  return (
    <motion.span
      className={classNames(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
      variants={fadeIn("right", "tween", 0.3, 2)}
    >
      <ReactSVG src={starCircle} />
    </motion.span>
  );
}

StarParticle.Proptypes = {
  classNames: Proptypes.string,
};
