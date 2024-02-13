import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, screen, render, getByText } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load Resturant Menu Component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <RestaurantMenu />
        <Cart />
      </Provider>
    )
  );
  const accordionHeader = screen.getByText("Recommended (18)");

  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart -(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(18);
  expect(
    screen.getByText("Cart is empty Please Add Items to the cart")
  ).toBeInTheDocument();
});
