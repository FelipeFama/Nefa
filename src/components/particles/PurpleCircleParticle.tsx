import classNames from "classnames";
import { motion } from "framer-motion";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import purpleCircle from "../../assets/images/particles/circle2.svg";
import { fadeIn } from "../../utils/motion";
interface classProps {
  className: string;
}
export function PurpleCircleParticle({ className }: classProps) {
  return (
    <motion.span
      className={classNames(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: "some" }}
      variants={fadeIn("right", "tween", 0.3, 2)}
    >
      <ReactSVG src={purpleCircle} />
    </motion.span>
  );
}

PurpleCircleParticle.Proptypes = {
  classNames: Proptypes.string,
};
