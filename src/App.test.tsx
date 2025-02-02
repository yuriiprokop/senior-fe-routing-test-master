import { render, screen } from "@testing-library/react";
export { userEvent } from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {

  beforeAll(() => {
    window.history.pushState({}, '', '/dashboard');
  });

  afterAll(() => {
    window.history.pushState({}, '', '/');
  });

  it("should render and route to order", async () => {

    render(<App />);
    expect(screen.getByText("Dashboard")).toBeVisible();

    const link = screen.getByRole("link", { name: "Order 1" });
    await userEvent.click(link);
    expect(window.location.pathname).toBe('/orders/1');
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();

    const backToDashboard = screen.getByRole("link", { name: "Back to Dashboard" });
    await userEvent.click(backToDashboard);
    expect(window.location.pathname).toBe('/dashboard');
  });

  it('should route to Not Found page', () => {
    window.history.pushState({}, '', '/another');
    render(<App />);
    expect(screen.getByText("404 Not Found")).toBeVisible();
  })

});
