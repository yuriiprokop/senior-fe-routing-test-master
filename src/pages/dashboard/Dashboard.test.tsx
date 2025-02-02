import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
    beforeAll(() => {
        window.history.pushState({}, '', '/dashboard');
    });

    it("should render", () => {
        render(<Dashboard />);
        expect(screen.getByText("Dashboard")).toBeVisible();
        expect(screen.getByRole("link", { name: "Order 1" })).toBeVisible();
        expect(screen.getByRole("link", { name: "Order 2" })).toBeVisible();
        expect(screen.getByRole("link", { name: "Order 3" })).toBeVisible();
    });
});