import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Text Cases", () => {
  //it & test are
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After each");
  // });

  it("Should load contact us copmonent", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact copmonent", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load button inside contact copmonent", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact coponent", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes.length);
    //Assertion
    expect(inputBoxes.length).toBe(2);
    //expect(inputBoxes.length).not.toBe(3);
  });
});
