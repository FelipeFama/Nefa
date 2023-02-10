import classNames from "classnames";
import { motion } from "framer-motion";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import blueCircle from "../../assets/images/particles/circle1.svg";
import { fadeIn } from "../../utils/motion";
interface classProps {
  className: string;
}
export function BlueCircleParticle({ className }: classProps) {
  return (
    <motion.span
      className={classNames(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
      variants={fadeIn("left", "tween", 0.3, 2)}
    >
      <ReactSVG src={blueCircle} />
    </motion.span>
  );
}

BlueCircleParticle.Proptypes = {
  classNames: Proptypes.string,
};
