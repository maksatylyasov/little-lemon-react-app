import React, { Component, useReducer } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import BookingForm from "./BookingForm";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Action } from "@remix-run/router";
import { seededRandom, fetchAPI, submitAPI } from "./RestAPI";

// let initTimes = "Maksat";
// const initializeTimes = () => {
//   // fetchAPI(new Date());
//   return fetchAPI(new Date());
//   // return initTimes;
// };
// const updateTimes = (availableTimes, Action) => {
//   //
//   if (Action.type === "reservation_time")
//     // return fetchAPI(new Date());
//     return 1;
//   return 2;
// };

// const fetchData = () => {
//   // fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     console.log(data);
//   //     settempResponse(data);
//   //     console.log(data);
//   //   })
//   //   .catch((error) => console.log(error));
// };

const BookingPage = (props) => {
  // const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // ReactDOM.render(
  //   <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />,
  //   document.getElementById("root")
  // );
  return (
    <>
      <Header className="Header">
        <Nav addToCartLength={props.addToCartLength} className="Nav"></Nav>
      </Header>
      {/* <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header> */}

      <BookingForm></BookingForm>
      <Footer />
    </>
  );
};

export default BookingPage;
