import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Given a Login Form component", () => {
  describe("When it rendered", () => {
    test("Then it should show a h1 label with the text 'Log in'", () => {
      render(<LoginForm />);
      const expectedText = "Log in";

      const result = screen.getByRole("heading", { name: expectedText });

      expect(result).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'Log in' inside", () => {
      render(<LoginForm />);
      const buttonText = "Log in";

      const resultButton = screen.getByLabelText(buttonText);

      expect(resultButton).toBeInTheDocument();
    });
  });
});
