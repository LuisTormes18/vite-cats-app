import { render, screen } from "@testing-library/react";
import { LoginPage } from "../pages";

describe("<LoginPage />", () => {
  test("render login page", () => {
    render(<LoginPage />);
    const loginForm = screen.getByTestId("loginForm");
    expect(loginForm).toBeDefined();
  });
});
