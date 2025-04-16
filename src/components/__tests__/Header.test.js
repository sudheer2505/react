import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";

it("Should load Header Component with Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });
  //   const logInButton = screen.getByRole("button"); // good way of testing is with role only
  //   const logInButton = screen.getByText("Login");
  expect(logInButton).toBeInTheDocument();
});

it("Should load Header component with Cart (0 items)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText("Cart (0 items)");

  expect(cartText).toBeInTheDocument();
});

it("Should load Header component with Cart Regex", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartText = screen.getByText(/Cart/); // checking the string in the component with Regex

  expect(cartText).toBeInTheDocument();
});

it("Should change Login button name to Logout ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logInButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(logInButton); // fire event will fire the click event and it will change the button name to "Logout"

  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();
});
