import { ROUTER_CONFIG } from "../../constants/router.const.tsx";
import { getRouteParams } from "../../utils/router.utils.ts";

const useParams = () => {
    const pathname = window.location.pathname;
    return getRouteParams(pathname, ROUTER_CONFIG);
};

export default useParams;
