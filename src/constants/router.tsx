import Dashboard from "../pages/dashboard/Dashboard";
import Order from "../pages/order/Order";

export const ROUTES_CONFIG = [
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/orders/:id",
        element: <Order />,
    },
] as const;