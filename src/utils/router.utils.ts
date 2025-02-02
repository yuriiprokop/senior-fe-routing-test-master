import { RouterPaths, RouterConfig, RouteParams } from "../types/router.type";

export const isSameRoutePath = (routePath: RouterPaths, actualRoute: string): boolean => {
    const simplePattern = routePath.replace(/:\w+/g, '[^/]+');
    const regex = new RegExp(`^${simplePattern}$`);

    return regex.test(actualRoute);
};

/**
 * Extracts route parameters from the given pathname based on the provided router configuration.
 *
 * This function iterates over each route in the router configuration, converting the route's path
 * into a regular expression by replacing dynamic segments (prefixed with `:`) with named capturing groups.
 * It then tests the provided pathname against these regex patterns and returns the matched groups as route parameters.
 *
 * @param {string} pathname - The current URL path (e.g., `/user/123`).
 * @param {RouterConfig} config - An array of route configuration objects. Each object should have a `path` property
 * which may include dynamic segments (e.g., `/user/:id`).
 *
 * @returns {RouteParams} An object containing the extracted route parameters. If no matching route is found,
 * an empty object is returned.
 */
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