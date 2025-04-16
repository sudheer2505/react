import { render, screen } from "@testing-library/react";
import RestaurantCard from "../../RestaurantCard";
import Mock_Data from "../Mock_Data/ResData.json"
import "@testing-library/jest-dom";

it("Should load RestaurantCard with Restaurant Name", () => {
  render(<RestaurantCard resData={Mock_Data}/>);

  const restName = screen.getByText("Wendy's Burgers");

  expect(restName).toBeInTheDocument();
});

it("Should test the Higher Order Function TopRatedRestaurant", () => {})
