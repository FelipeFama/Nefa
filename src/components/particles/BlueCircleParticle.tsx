import classNames from "classnames";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import blueCircle from "../../assets/images/particles/circle1.svg";
interface classProps {
  className: string;
}
export function BlueCircleParticle({ className }: classProps) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={blueCircle} />
    </span>
  );
}

BlueCircleParticle.Proptypes = {
  classNames: Proptypes.string,
};
