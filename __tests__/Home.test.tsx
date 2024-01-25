import Home from "@/src/app/page";
import { render, screen } from "@testing-library/react";

test("renders home component with a button", () => {
  render(<Home />);
  const buttonElement = screen.getByRole("button", { name: /click on me/i });

  // Check if the button is in the document
  expect(buttonElement).toBeInTheDocument();
});
