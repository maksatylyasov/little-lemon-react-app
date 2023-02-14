import { render, screen } from "@testing-library/react";
import BookingForm from "./component/BookingForm";

import updateTimes from "./component/BookingPage";
import initializeTimes from "./component/BookingPage";

// test("Renders the BookingForm heading", () => {
//   render(<BookingForm />);
//   const headingElement = screen.getByText("Choose time");
//   expect(headingElement).toBeInTheDocument();
// });

// test("Testting initializeTimes", () => {
//   expect(initializeTimes()).toReturn();
// });
// test("Testting updateTimes", () => {
//   expect(initializeTimes()).toHaveBeenCalled();
// });

test("Testting Form", () => {
  render(<BookingForm />);
  const heading = screen.getByText("Book Now");
  expect(heading).toBeInTheDocument();
  const date = screen.getByText("Choose date");
  expect(date).toBeInTheDocument();
  const time = screen.getByText("Choose time");
  expect(time).toBeInTheDocument();
  const guest = screen.getByText("Number of guests");
  expect(guest).toBeInTheDocument();
  const occasion = screen.getByText("Occasion");
  expect(occasion).toBeInTheDocument();
  // expect(fakeFunction).toBe(1);
  // expect(fakeFunction()).not.toHaveBeenCalled();
});

test("Testing inputs", () => {
  render(<BookingForm />);
  const name = screen.getByLabelText("firstName");
  // const lastName = getByText("Lastname");

  fireEvent.change(name, { target: { value: "John Doe" } });
});
