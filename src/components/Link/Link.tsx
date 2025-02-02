import { WINDOW_POP_STATE_EVENT } from "../../constants/window-handlers.const";
import { RouterPaths } from "../../types/router.type";
import { LinkProps } from "./Link.type";
import { MouseEvent } from "react";

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