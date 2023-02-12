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

const BookingForm = () => {
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
    resDate: new Date().toLocaleDateString(),
    resTime: "",
    number: 1,
    occasion: "Birthday",
  });

  const [tempResponse, settempResponse] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setForm({ resTime: e.target.value });
    setForm({ ...form, [name]: value });
    dispatch({ type: "reservation_time" });
  };
  const handleInputChangeResTime = (e) => {
    const { name, value } = e.target;
    // setForm({ resTime: e.target.value });
    setForm({ ...form, ["resTime"]: value });
  };

  const handleSubmit = (e) => {
    alert("Form Details" + form.resTime);
    e.preventDefault();
  };
  return (
    <div>
      <form className="booking-form" onSubmit={handleSubmit} value={form}>
        <label htmlfor="res-date">Choose date</label>
        <input
          type="date"
          name="resDate"
          value={form.resDate}
          onChange={handleInputChange}
        />
        <label htmlfor="res-time">Choose time</label>
        <select
          name="resTime "
          value={form.resTime}
          onChange={handleInputChangeResTime}
        >
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
        <label htmlfor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          name="number"
          value={form.number}
          onChange={handleInputChange}
        />
        <label htmlfor="occasion">Occasion</label>
        <select
          name="occasion"
          value={form.occasion}
          onChange={handleInputChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};
export default BookingForm;
