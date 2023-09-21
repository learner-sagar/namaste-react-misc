import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should search restaurant list for text gurukripa", async () => {
  jest.useFakeTimers();

  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  await act(async () => jest.runAllTimers());

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "gurukripa" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(4);
  expect(searchBtn).toBeInTheDocument();
  jest.useRealTimers();
});

it("Should search restaurant list for text gurukripa", async () => {
  jest.useFakeTimers();
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  await act(async () => jest.runAllTimers());
  const restCardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(restCardsBeforeFilter.length).toBe(9);
  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  expect(topRatedButton).toBeInTheDocument();
  fireEvent.click(topRatedButton);
  const restCardsAfterFilter = screen.getAllByTestId("resCard");
  expect(restCardsAfterFilter.length).toBe(3);
  jest.useRealTimers();
});
