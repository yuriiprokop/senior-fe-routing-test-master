import { FC, useEffect, useState } from "react";
import { RouterProps } from "./Router.type";
import { isSameRoutePath } from "../../utils/router.utils";
import { WINDOW_POP_STATE_EVENT } from "../../constants/window-handlers.const";

const Router: FC<RouterProps> = ({ config }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopStateEvent = () => {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener(WINDOW_POP_STATE_EVENT, handlePopStateEvent);

    return () => {
      window.removeEventListener(WINDOW_POP_STATE_EVENT, handlePopStateEvent)
    };
  }, []);

  const getCurrentPath = () => {
    const route = config.find(r => isSameRoutePath(r.path, currentPath));
    return <>
      {route ? <route.element /> : <div>404 Not Found</div>}
    </>
  }

  return <>{getCurrentPath()}</>;
}

export default Router;
