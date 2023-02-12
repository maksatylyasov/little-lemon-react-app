import React, { Component, useState, useReducer } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Homepage } from "./Homepage";
import { BookingPage } from "./BookingPage";

import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomerSay from "./CustomersSay";
import Chicago from "./Chicago";

const Main = (props) => {
  return (
    <main>
      <CallToAction></CallToAction>
      <Specials></Specials>
      <CustomerSay></CustomerSay>
      <Chicago></Chicago>
    </main>
  );
};
export default Main;
