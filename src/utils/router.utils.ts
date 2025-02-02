import { RouterPaths, RouterConfig, RouteParams } from "../types/router.type";

export const isSameRoutePath = (routePath: RouterPaths, actualRoute: string): boolean => {
    const simplePattern = routePath.replace(/:\w+/g, '[^/]+');
    const regex = new RegExp(`^${simplePattern}$`);

    return regex.test(actualRoute);
};

export const getRouteParams = (pathname: string, config: RouterConfig): RouteParams => {
    for (const route of config) {
        const pattern = route.path.replace(/:([^/]+)/g, '(?<$1>[^/]+)');
        const regex = new RegExp(`^${pattern}$`);

        const match = pathname.match(regex);
        if (match?.groups) {
            return match.groups as RouteParams;
        }
    }
    return {} as RouteParams;
}