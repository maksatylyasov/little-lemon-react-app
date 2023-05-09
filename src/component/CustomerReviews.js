import React from "react";
import Rating from "@mui/material/Rating";

const customerReviews = [
  {
    id: 1,
    username: "sweetlover84",
    rating: 4,
    comment:
      "Absolutely delicious desserts! The chocolate lava cake was heavenly, and the staff were friendly. Highly recommend!",
    date: "2023-04-27",
  },
  {
    id: 2,
    username: "treatsplease",
    rating: 5,
    comment:
      "Best dessert place in town! The variety is amazing and everything tastes fantastic. Service is top-notch too.",
    date: "2023-04-25",
  },
  {
    id: 3,
    username: "indulgence123",
    rating: 3,
    comment:
      "Decent dessert spot, but a bit overpriced. Had better elsewhere, but their macarons were quite good.",
    date: "2023-04-20",
  },
  {
    id: 4,
    username: "sugarcravings",
    rating: 5,
    comment:
      "The perfect spot for satisfying my sweet tooth! I love their cheesecake and the cozy atmosphere. A must-visit!",
    date: "2023-04-18",
  },
  {
    id: 5,
    username: "cakefanatic",
    rating: 4,
    comment:
      "Great place for dessert lovers. The red velvet cake was amazing, but the coffee could have been better.",
    date: "2023-04-15",
  },
];

const CustomerReviews = () => {
  return (
    <>
      <section className="customer-reviews">
        {customerReviews.map((element) => (
          <article className="user">
            <h6>{element.username}</h6>
            <Rating name="read-only" value={element.rating} readOnly />
            <p>{element.comment}</p>
            <p style={{ textAlign: "right", fontStyle: "italic" }}>
              {element.date}
            </p>
          </article>
        ))}
      </section>
    </>
  );
};
export default CustomerReviews;
