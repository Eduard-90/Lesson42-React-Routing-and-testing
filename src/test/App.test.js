import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("TEST APP", () => {
  test("Menu links work", async () => {
    render(<App />);
    const mainLink = screen.getByRole("link", { name: /main/i });
    const postsLink = screen.getByRole("link", { name: /posts/i });
    const loginLink = screen.getByRole("link", { name: /login/i });
    userEvent.click(mainLink);
    expect(
      await screen.findByText(/We have a lot of posts/i)
    ).toBeInTheDocument();
    userEvent.click(postsLink);
    expect(await screen.findByText(/View our posts/i)).toBeInTheDocument();
    userEvent.click(loginLink);
    expect(
      await screen.findByText(/Subscribe to our updates/i)
    ).toBeInTheDocument();
  });
});
