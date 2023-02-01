import classNames from "classnames";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import orangeCircle from "../../assets/images/particles/circle1.svg";
interface classProps {
  className: string;
}
export function PurpleCircleParticle({ className }: classProps) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={orangeCircle} />
    </span>
  );
}

PurpleCircleParticle.Proptypes = {
  classNames: Proptypes.string,
};
