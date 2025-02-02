import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import Order from "./Order";

describe("Dashboard", () => {
    beforeAll(() => {
        window.history.pushState({}, '', '/orders/1');
    });

    it("should render", () => {
        render(<Order />);
        expect(screen.getByText('Order ID 1')).toBeVisible();
    });
});