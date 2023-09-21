import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test cases", () => {
  beforeAll(() => {
    console.log("running before all");
  });
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button on contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should have contact us text in contact us component", () => {
    render(<Contact />);
    const text = screen.getByText("Contact Us Page");
    expect(text).toBeInTheDocument();
  });

  it("Should have 2 input fields", () => {
    render(<Contact />);
    const inputFields = screen.getAllByRole("textbox");
    expect(inputFields.length).toBe(2);
  });
});
