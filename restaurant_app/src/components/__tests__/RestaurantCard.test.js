import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MockData from "../__mocks__/restaurantCardMock.json";
import "@testing-library/jest-dom";
import withPromotedLabel from "../withPromotedLabel";

it("Should render RestaurantCard with props data", () => {
  render(<RestaurantCard restaurant={MockData?.info} />);
  const name = screen.getByText("Gurukripa Restaurant Sarwate");
  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard with Promoted Label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted restaurant={MockData?.info} />);
  console.log(RestaurantCardPromoted);
  const label = screen.getByText("promoted");
  expect(label).toBeInTheDocument();
});
