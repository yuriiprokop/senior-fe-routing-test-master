import { FC } from "react";
import { RouterProps } from "./Router.type";

const Router: FC<RouterProps> = ({ config }) => {
  return <>{config[0].element}</>;
}

export default Router;
