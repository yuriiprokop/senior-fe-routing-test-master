import { ROUTER_CONFIG } from "../constants/router.const";

export type RouterConfig = readonly {
    path: RouterPaths;
    element: React.FC;
}[];

export type RouterPaths = typeof ROUTER_CONFIG[number]["path"];

export type ExtractPathParams<T extends RouterPaths> =
    T extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : never;

export type RouteParams = ExtractPathParams<RouterPaths>;

export type isValidParams<T> = T extends ExtractPathParams<RouterPaths> ? T : never;

