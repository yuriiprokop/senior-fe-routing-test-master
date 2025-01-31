import { ReactNode } from "react";

export interface RouterProps {
    config: readonly RouterConfig[];
}

interface RouterConfig {
    path: string;
    element: ReactNode;
}