import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../../Body";
import "@testing-library/jest-dom";
import { SWIGGY_DATA } from "../../../utils/constants";
import { BrowserRouter } from "react-router-dom";

// mock fetch function to get the res data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(SWIGGY_DATA);
    },
  });
});

it("Should Search restaurant list for pizza text input", async () => {
  // trying to fake an api to fetch the data
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // intial data check
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  // data after search
  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByPlaceholderText("Search");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(1);
});

it("Should filter Top Rated Restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );


  const cardsBeforeFilter = screen.getAllByTestId("resCard")

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedResBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

  fireEvent.click(topRatedResBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(2);
});
