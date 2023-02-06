import classNames from "classnames";
import Proptypes from "prop-types";
import { ReactSVG } from "react-svg";
import starCircle from "../../assets/images/particles/star1.svg";
interface classProps {
  className: string;
}
export function StarParticle({ className }: classProps) {
  return (
    <span className={classNames(className)}>
      <ReactSVG src={starCircle} />
    </span>
  );
}

StarParticle.Proptypes = {
  classNames: Proptypes.string,
};
