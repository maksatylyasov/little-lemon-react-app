import React, { Component } from "react";

const customers = [
  {
    name: "Max Gatsby",
    comment: "The best place for dessert",
    date: new Date(),
  },
  {
    name: "Jason Babooa",
    comment: "I can't get enough",
    date: new Date(),
  },
];
const CustomerSay = () => {
  return (
    <>
      {customers.forEach((customer) => {
        <section>
          <article>
            <h1>{customer.name}name</h1>
            <p>{customer.comment}</p>
          </article>
        </section>;
      })}
    </>
  );
};
export default CustomerSay;
