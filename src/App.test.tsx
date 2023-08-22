import App from "./App";
import { render } from "@testing-library/react";

describe("Simple working test", () => {
  it("the title is visible", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
