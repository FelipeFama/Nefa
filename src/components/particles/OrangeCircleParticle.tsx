import classNames from "classnames";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import orangeCircle from "../../assets/images/particles/circle1.svg";

export function OrangeCircleParticle() {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={orangeCircle} />
    </span>
  );
}

OrangeCircleParticle.Proptypes = {
  classNames: Proptypes.string,
};
