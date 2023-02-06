import classNames from "classnames";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import purpleCircle from "../../assets/images/particles/circle2.svg";
interface classProps {
  className: string;
}
export function PurpleCircleParticle({ className }: classProps) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={purpleCircle} />
    </span>
  );
}

PurpleCircleParticle.Proptypes = {
  classNames: Proptypes.string,
};
