import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import PROMOTED_MOCK_DATA from "../mocks/resCardMockLabel.json";
import "@testing-library/jest-dom";
import { withPromatedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});

// it("should render Labeled RestaurantCard Component with label", () => {
//   const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
//   render(<RestaurantCardPromoted {...PROMOTED_MOCK_DATA} />);
//   const CardData = screen.getByText("Veg");
//   expect(CardData).toBeInTheDocument();
// });
