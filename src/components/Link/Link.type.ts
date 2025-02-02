import { ReactNode } from "react";
import { ExtractPathParams, RouterPaths } from "../../types/router.type";

export type LinkProps<T extends RouterPaths> = {
    to: T;
    children: ReactNode;
    params?: ExtractPathParams<T>;
};