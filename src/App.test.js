import { render, screen } from "@testing-library/react";
import ProfileModifier from "./components/ProfileModifier";

test("renders learn react link", () => {
  render(<ProfileModifier />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
