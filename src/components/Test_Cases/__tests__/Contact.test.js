import { render, screen } from "@testing-library/react";
import Contact from "../../Contact";
import "@testing-library/jest-dom";

describe("Testing Contact Component", () => {
  
  test("should load heading in contact screen", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button in contact screen", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load input placeolder name in contact screen", () => {
    render(<Contact />);
    const inputs = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputs).toBeInTheDocument();
  });

  test("should load Submit Button in contact screen", () => {
    render(<Contact />);
    const submit = screen.getByText("Submit");

    // Assertion
    expect(submit).toBeInTheDocument();
  });

  test("should load textboxes in contact screen", () => {
    render(<Contact />);
    const inputboxes = screen.getAllByRole("textbox"); // this will return input fields data in array format

    // Assertion
    // expect(inputboxes.length).toBe(2);
    expect(inputboxes.length).not.toBe(0);
  });
});
