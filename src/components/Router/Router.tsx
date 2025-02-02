import { FC, useEffect, useState } from "react";
import { RouterProps } from "./Router.type";
import { isSameRoutePath } from "../../utils/router.utils";
import { WINDOW_POP_STATE_EVENT } from "../../constants/window-handlers.const";

/**
 * A React functional component that handles client-side routing based on a configuration routes object.
 *
 * This component listens for custom pop state events (triggered when the URL changes) and updates its
 * internal state to reflect the current path. It then renders the corresponding route component from the
 * provided configuration. If no matching route is found, a fallback "404 Not Found" element is displayed.
 *
 * @param {RouterProps} props - The props for the Router component.
 * @param {RouteConfig[]} props.config - An array of route configuration objects. Each object should contain
 * a `path` and an `element` property. The `path` is compared against the current URL, and the `element`
 * (a React component) is rendered if the route matches.
 *
 * @returns {JSX.Element} The rendered route component corresponding to the current path, or a "404 Not Found"
 * element if no matching route is found.
 */
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
