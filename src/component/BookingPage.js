import React, { Component, useReducer } from "react";
import Header from "./Header";
import Nav from "./Nav";
import BookingForm from "./BookingForm";
import * as ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Action } from "@remix-run/router";
import { seededRandom, fetchAPI, submitAPI } from "./RestAPI";

let initTimes = {
  resTime: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
};
const initializeTimes = () => {
  // fetchAPI(new Date());
  return fetchAPI(new Date());
};
const updateTimes = (availableTimes, Action) => {
  //
  if (Action.type === "reservation_time") return fetchAPI(new Date());
};

const fetchData = () => {
  // fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     settempResponse(data);
  //     console.log(data);
  //   })
  //   .catch((error) => console.log(error));
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  ReactDOM.render(
    <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />,
    document.getElementById("root")
  );
  return (
    <div>
      {/* <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header> */}

      {/* <BookingForm></BookingForm> */}
    </div>
  );
};

export default BookingPage;
