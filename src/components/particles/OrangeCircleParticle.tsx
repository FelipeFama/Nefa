import classNames from "classnames";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import orangeCircle from "../../assets/images/particles/circle3.svg";

interface classProps {
  className: string;
}
export function OrangeCircleParticle({ className }: classProps) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={orangeCircle} />
    </span>
  );
}

OrangeCircleParticle.Proptypes = {
  classNames: Proptypes.string,
};
