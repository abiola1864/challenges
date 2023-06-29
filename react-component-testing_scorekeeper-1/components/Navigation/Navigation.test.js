// import { render, screen } from "@testing-library/react";
// import Navigation from ".";

// jest.mock("next/router", () => ({
//   useRouter() {
//     return { pathname: jest.fn() };
//   },
// }));

// test("renders with two links 'Play' and 'History'", () => {});


import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  
  // Check if 'Play' link is rendered
  const playLink = screen.getByRole("link", { name: "Play" });
  expect(playLink).toBeInTheDocument();

  // Check if 'History' link is rendered
  const historyLink = screen.getByRole("link", { name: "History" });
  expect(historyLink).toBeInTheDocument();
});
