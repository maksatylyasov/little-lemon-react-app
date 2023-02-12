import { render, screen } from "@testing-library/react";
import BookingForm from "./component/BookingForm";

import updateTimes from "./component/BookingPage";
import initializeTimes from "./component/BookingPage";

// test("Renders the BookingForm heading", () => {
//   render(<BookingForm />);
//   const headingElement = screen.getByText("Choose time");
//   expect(headingElement).toBeInTheDocument();
// });

test("Testting initializeTimes", () => {
  expect(initializeTimes()).toBe(1);
});
// test("Testting updateTimes", () => {});
