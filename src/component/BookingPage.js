import React, { Component } from "react";
import Header from "./Header";
import Nav from "./Nav";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <div>
      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <BookingForm></BookingForm>
    </div>
  );
};
export default BookingPage;
