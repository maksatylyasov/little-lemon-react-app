import React, {
  Component,
  useEffect,
  useState,
  useReducer,
  dispatch,
} from "react";
import Footer from "./Footer";
import Main from "./Main";

import { ErrorMessage, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Spinner,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { seededRandom, fetchAPI, submitAPI } from "./RestAPI";
import { useNavigate } from "react-router-dom";
import * as ReactDOM from "react-dom";
import ConfirmedBooking from "./ConfirmedBooking";

const BookingForm = () => {
  // const navigate = useNavigate();
  function confirmationNavigate() {
    ReactDOM.render(<ConfirmedBooking />, document.getElementById("root"));
  }
  const fakeFunction = () => {
    return 1;
  };

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPosts(data);
  //     })
  //     .catch((err) => {
  //       console.log("ERROR IS FOUND" + err.message);
  //     });
  //   console.log("I AM HERE");
  // }, []);

  const initializeTimes = () => {
    // fetchAPI(new Date());
    return fetchAPI(new Date());
    // return initTimes;
  };
  const updateTimes = (availableTimes, Action) => {
    //
    if (Action.type === "reservation_time") return fetchAPI(new Date());
    return fetchAPI(new Date());
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // const formik = useFormik({
  //   initialValues: { firstName: "", email: "", type: "", comment: "" },
  //   onSubmit: (values, { resetForm }) => {},
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .min(2, "Too Short!")
  //       .max(50, "Too Long!")
  //       .required("Required"),
  //     comment: Yup.string()
  //       .min(25, "Must be at least 25 characters!")
  //       .max(50, "Too Long!")
  //       .required("Required"),
  //     email: Yup.string().email("Invalid email").required("Required"),
  //     type: Yup.string().optional(),
  //   }),
  // });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    resDate: new Date().toLocaleDateString(),
    resTime: "",
    number: 1,
    occasion: "Birthday",
    disable: true,
  });

  const [tempResponse, settempResponse] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setForm({ resTime: e.target.value });
    setForm({ ...form, [name]: value });
    setForm({ disable: false });
    dispatch({ type: "reservation_time" });
  };

  const handleInputChangeDate = (e) => {
    dispatch({ type: "reservation_time" });
    // alert("DATE dispatch" + availableTimes);
  };
  const handleInputChangeResTime = (e) => {
    const { name, value } = e.target;
    // setForm({ resTime: e.target.value });
    setForm({ ...form, ["resTime"]: value });
  };

  const handleSubmit = (e) => {
    // alert("Form Details" + form.resTime);
    if (submitAPI(form)) confirmationNavigate();
    e.preventDefault();
  };

  return (
    <div className="reservations">
      {/* {props.availableTimes.map((value, i) => (
        <p>{value}</p>
      ))} */}
      <form
        id="form-id"
        className="booking-form"
        onSubmit={handleSubmit}
        value={form}
        aria-label="form"
      >
        <h1>Book Now</h1>
        <label htmlfor="firstName">Firstname</label>
        <input
          aria-label="firstName"
          type="text"
          name="firstName"
          id="firstName"
          value={form.firstName}
          minLength={2}
          maxLength={25}
          placeholder="enter firstname"
          required
          onChange={handleInputChange}
        />
        <label htmlfor="lastName">Lastname</label>
        <input
          aria-label="lastName"
          type="text"
          name="lastName"
          value={form.lastName}
          minLength={2}
          maxLength={25}
          required
          placeholder="enter lastname"
          onChange={handleInputChange}
        />
        <label htmlfor="email">Email</label>
        <input
          aria-label="email"
          type="email"
          name="email"
          value={form.email}
          required
          placeholder="email"
          onChange={handleInputChange}
        />
        <label htmlfor="res-date">Choose date</label>
        <input
          aria-label="date"
          type="date"
          name="resDate"
          value={form.resDate}
          required
          onChange={handleInputChange}
        />
        <label htmlfor="res-time">Choose time</label>
        <select
          aria-label="time"
          name="resTime "
          value={form.resTime}
          required
          onChange={handleInputChangeResTime}
        >
          {availableTimes.map((value) => (
            <option key={value}>{value}</option>
          ))}

          {/* <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option> */}
        </select>
        <label htmlfor="guests">Number of guests</label>
        <input
          aria-label="guestNumber"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          name="number"
          value={form.number}
          required
          onChange={handleInputChange}
        />
        <label htmlfor="occasion">Occasion</label>
        <select
          aria-label="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleInputChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          className="form-button"
          aria-label="button"
          type="submit"
          value="Make Your Reservation"
          disabled={form.disable}
        />
      </form>
    </div>
  );
};
export default BookingForm;
