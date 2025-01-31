import { ReactNode } from "react";

export interface LinkProps {
    to: string;
    params?: { [key: string]: string };
    children: ReactNode;
}