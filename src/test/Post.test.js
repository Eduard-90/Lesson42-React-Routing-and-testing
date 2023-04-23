import { render, screen } from "@testing-library/react";
import About from "../components/Posts";

test("Posts has title", () => {
  render(<About />);
  const titleElement = screen.getByRole("heading", { name: /posts/i });
  expect(titleElement).toBeInTheDocument();
});
