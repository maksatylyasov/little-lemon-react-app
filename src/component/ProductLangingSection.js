import React, { useState } from "react";

import image1 from "../assets/chocolate-cake.jpg";
import image2 from "../assets/person2-review.png";
import image3 from "../assets/person3-review.png";
import Button from "./Button";
import Rating from "@mui/material/Rating";
import CustomerReviews from "./CustomerReviews";

const ProductLandingSection = (props) => {
  //   var quantity = 1;
  const [quantity, SetQuantity] = useState(1);
  // console.log("I AM HERE " + props.addToCartDetails.image);
  const handleCounterClickMinus = () => {
    if (quantity > 1) SetQuantity(quantity - 1);
    else SetQuantity(1);
    // document.getElementById("counter").append = quantity;
  };
  const handleCounterClickPlus = () => {
    SetQuantity(quantity + 1);
    // document.getElementById("counter").append = quantity;
  };

  var ProductDetails = {
    title: props.children.title,
    price: props.children.price,
    quantity: quantity,
    image: props.children.image,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    // props.addToCartDetails.image = props.children.image;
    // console.log("I AM HERE " + props.AddCartDetails(ProductDetails));
    props.AddCartDetails(ProductDetails);
  };

  const [imageOpacity, setImageOpacity] = useState(true);
  const [imageOpacity2, setImageOpacity2] = useState(false);
  const [imageOpacity3, setImageOpacity3] = useState(false);

  const handleThumbnailClick = (value) => {
    setMainImage(value);
    if (value === props.children.image) {
      setImageOpacity(true);
      setImageOpacity2(false);
      setImageOpacity3(false);
    } else if (value === props.children.image2) {
      setImageOpacity(false);
      setImageOpacity2(true);
      setImageOpacity3(false);
    } else {
      setImageOpacity(false);
      setImageOpacity2(false);
      setImageOpacity3(true);
    }
  };

  const [returnHandle, setReturnHandle] = useState(false);
  const [mainImage, setMainImage] = useState(props.children.image);

  var addToCartDetails = {
    title: props.children.title,
    price: props.children.price,
    quantity: quantity,
    image: props.children.image,
  };
  return (
    <>
      <section className="product-page">
        <section className="product-images">
          <article className="small-images">
            <img
              onClick={() => {
                handleThumbnailClick(props.children.image);
              }}
              style={
                imageOpacity
                  ? { opacity: "50%", borderStyle: "solid" }
                  : { opacity: "100%" }
              }
              src={props.children.image}
              alt=""
            />
            <img
              onClick={() => {
                handleThumbnailClick(props.children.image2);
              }}
              style={
                imageOpacity2
                  ? { opacity: "50%", borderStyle: "solid" }
                  : { opacity: "100%" }
              }
              src={props.children.image2}
              alt=""
            />
            <img
              onClick={() => {
                handleThumbnailClick(props.children.image3);
              }}
              style={
                imageOpacity3
                  ? { opacity: "50%", borderStyle: "solid" }
                  : { opacity: "100%" }
              }
              src={props.children.image3}
              alt=""
            />
          </article>
          <article className="main-image">
            <img src={mainImage} alt="" />
          </article>
        </section>

        <section className="product-details">
          <article>
            <h1>{props.children.title}</h1>
            <Rating name="read-only" value={props.children.rating} readOnly />
            <h3>{props.children.price}</h3>
          </article>
          <article className="quantity">
            <Button
              name="-"
              handleClick={handleCounterClickMinus}
              className="Button"
              onClick={handleCounterClickMinus}
            ></Button>
            <p id="counter">{quantity}</p>
            <Button
              handleClick={handleCounterClickPlus}
              name="+"
              className="Button"
              onClick={handleCounterClickPlus}
            ></Button>
          </article>
          <article>
            <h5>Contains the following</h5>
            <p>{props.children.ingridients}</p>
          </article>
          <Button
            handleClick={handleAddToCart}
            name={"Add to Cart" + " " + props.children.price}
            className="Button"
            onClick={handleAddToCart}
          ></Button>
          <article>
            <h5>Description</h5>
            <p>{props.children.description}</p>
          </article>
          <article>
            <h5
              onClick={() => {
                setReturnHandle(!returnHandle);
              }}
            >
              Return
            </h5>
            <p
              style={returnHandle ? { display: "block" } : { display: "none" }}
            >
              Sorry, we do not accept returns or refunds for our restaurant
              products. We strive to provide the highest quality food and
              service, and if there are any issues with your order, please let
              us know so we can make it right. Thank you for your understanding.
            </p>
          </article>
        </section>
      </section>
      <CustomerReviews />
    </>
  );
};

export default ProductLandingSection;
