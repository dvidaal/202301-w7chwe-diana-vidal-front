import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it rendered", () => {
    test("Then it should show an h1 with text 'ISDInet'", () => {
      render(<Header />);

      const headerText = "ISDInet";

      const renderResult = screen.getByRole("heading", { name: headerText });

      expect(renderResult).toBeInTheDocument();
    });
  });
});
