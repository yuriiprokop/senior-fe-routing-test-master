import { ROUTER_CONFIG } from "../../constants/router.const.tsx";
import { getRouteParams } from "../../utils/router.utils.ts";

/**
 * A custom React hook that returns the route parameters extracted from the current window location.
 *
 * This hook utilizes the `getRouteParams` function along with a globally defined router configuration (`ROUTER_CONFIG`)
 * to determine and return the dynamic parameters embedded in the current URL.
 *
 * @returns {RouteParams} An object containing the route parameters derived from the current URL.
 */
const useParams = () => {
    const pathname = window.location.pathname;
    return getRouteParams(pathname, ROUTER_CONFIG);
};

export default useParams;
