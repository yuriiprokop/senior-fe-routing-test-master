import { WINDOW_POP_STATE_EVENT } from "../../constants/window-handlers.const";
import { RouterPaths } from "../../types/router.type";
import { LinkProps } from "./Link.type";
import { MouseEvent } from "react";

/**
 * A React component that renders a link with dynamic route parameters.
 *
 * This component accepts a route path that may include parameter placeholders (prefixed with `:`)
 * and replaces these placeholders with the corresponding values provided via the `params` prop.
 * When the link is clicked, it prevents the default navigation behavior, updates the browser's history
 * using `window.history.pushState`, and dispatches a custom pop state event.
 *
 * @template T - A type extending `RouterPaths` representing a valid route path.
 * @param {LinkProps<T>} props - The properties for the Link component.
 * @param {T} props.to - The target route path containing parameter placeholders (e.g., `/orders/:id`).
 * @param {Partial<Record<string, string | number>>} [props.params] - An optional object mapping
 * parameter names to their corresponding values. If provided, each placeholder in the `to` path will be
 * replaced with its associated value.
 * @param {React.ReactNode} props.children - The content to be displayed inside the link.
 *
 * @returns {JSX.Element} A rendered `<a>` element that, when clicked, updates the URL without reloading the page.
 *
 * @throws {Error} If a route parameter is missing from `params` or if a parameter name is not a string.
 */
const Link = <T extends RouterPaths>({ to, params, children }: LinkProps<T>): JSX.Element => {
    const toWithParams = to.replace(/:([a-zA-Z0-9_]+)/g, (_: unknown, paramName: unknown) => {
        if (typeof paramName !== 'string') {
            throw new Error(`paramName must be a string, but got ${typeof paramName}`);
        }

        if (params === undefined) {
            return paramName;
        }

        if (paramName in params) {
            return String(params[paramName as keyof typeof params]);
        }

        throw new Error(`Missing parameter value for ${paramName}`);
    });

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        window.history.pushState({}, "", toWithParams);

        const popStateEvent = new PopStateEvent(WINDOW_POP_STATE_EVENT);
        window.dispatchEvent(popStateEvent);
    };

    return (
        <a href={toWithParams} onClick={handleClick}>
            {children}
        </a>
    );
};


export default Link;