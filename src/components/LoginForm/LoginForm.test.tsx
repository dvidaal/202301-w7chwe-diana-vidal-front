import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import LoginForm from "./LoginForm";

describe("Given a Login Form component", () => {
  describe("When it rendered", () => {
    test("Then it should show a h1 label with the text 'Log in'", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );
      const expectedText = "Log in";

      const result = screen.getByRole("heading", { name: expectedText });

      expect(result).toBeInTheDocument();
    });
    test("Then it should show a button with the text 'Log in' inside", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const buttonText = "Log in";

      const resultButton = screen.getByLabelText(buttonText);

      expect(resultButton).toBeInTheDocument();
    });
  });
});
