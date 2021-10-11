import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

// rendering the checkout form to check for errors. I am getting one but it's coming from codegrade. I'm not quite sure what to do about that.
test("renders without errors", () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zipCode = screen.getByLabelText(/zip/i);

  userEvent.type(firstName, "scout");
  userEvent.type(lastName, "reilly");
  userEvent.type(address, "test@test.com");
  userEvent.type(city, "st. george");
  userEvent.type(state, "utah");
  userEvent.type(zipCode, "84770");
});

//submitting user data and hitting checkout. This submits the form and I'm looking for the success message to
test("shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zipCode = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button");

  userEvent.type(firstName, "scout");
  userEvent.type(lastName, "reilly");
  userEvent.type(address, "test@test.com");
  userEvent.type(city, "st. george");
  userEvent.type(state, "utah");
  userEvent.type(zipCode, "84770");

  userEvent.click(button);

  const subData = screen.queryByTestId("successMessage");

  expect(subData).toHaveTextContent(
    "Your new green friends will be shipped to:"
  );
});
