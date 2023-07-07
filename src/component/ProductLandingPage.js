import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import CustomerReviews from "./CustomerReviews";
import Button from "./Button";
import Rating from "@mui/material/Rating";
// import ProductLandingSection from "./ProductLangingSection";

import image1 from "../assets/chocolate-cake.jpg";
import image1Second from "../assets/chocolate-cake2.jpg";
import image1Third from "../assets/chocolate-cake3.jpg";

import image2 from "../assets/caramel-cake-chocolate.jpg";
import image3 from "../assets/red-velvet-cheesecake-wooden-table-cafe.jpg";
import image4 from "../assets/close-up-shot-homemade-salted-caramel-cream-brownie-toffee.jpg";
import image5 from "../assets/Coconut-Cream-Pie.jpg";
import image6 from "../assets/Peanut-Butter-Cupcake.jpg";

import { useDispatch, useSelector } from "react-redux";
import { postItems, dummyReducer } from "../features/basketItemsSlices";
import { nanoid } from "@reduxjs/toolkit";

const products = [
  {
    id: "1",
    title: "Chocolate Cake",
    description:
      "Indulge in our Decadent Chocolate Cake - a rich, moist chocolate cake topped with creamy chocolate frosting. Perfect for satisfying your chocolate cravings.",
    image: image1,
    image2: image1Second,
    image3: image1Third,
    price: "$21.99",
    ingridients: "Eggs, Gluten, Milk",
    rating: 5,
    quantity: 1,
  },
  {
    id: "2",
    title: "Caramel Cake Chocolate",
    description:
      "Treat yourself to our heavenly Caramel Chocolate Cake - a luscious chocolate cake layered with silky caramel frosting, drizzled with chocolate ganache. Pure decadence in every bite.",
    image: image2,
    price: "$21.99",
    ingridients: "Eggs, Gluten, Milk",
    rating: 5,
    quantity: 0,
  },
  {
    id: "3",
    title: "Red Velvet Cheesecake",
    description:
      "Experience pure indulgence with our Red Velvet Cheesecake - a velvety smooth cheesecake on top of a rich red velvet cake, topped with creamy frosting and a sprinkle of cocoa powder.",
    image: image3,
    price: "$21.99",
    ingridients: "Eggs, Gluten, Milk",
    rating: 5,
    quantity: 0,
  },
  {
    id: "4",
    title: "Salted Caramel Brownie",
    description:
      "Satisfy your sweet and salty cravings with our Salted Caramel Brownie - a gooey, fudgy brownie topped with a layer of rich salted caramel sauce and a sprinkle of sea salt.",
    image: image4,
    price: "$21.99",
    ingridients: "Eggs, Gluten, Milk",
    rating: 5,
    quantity: 0,
  },
  {
    id: "5",
    title: "Coconut Cream Pie",
    description:
      "Transport yourself to a tropical paradise with our Coconut Cream Pie - a buttery crust filled with creamy coconut custard and topped with whipped cream and toasted coconut flakes.",
    image: image5,
    price: "$21.99",
    ingridients: "Eggs, Gluten, Milk",
    rating: 5,
    quantity: 0,
  },
  {
    id: "6",
    title: "Peanut Butter Cupcake",
    description:
      "Get your peanut butter fix with our Peanut Butter Cupcake - a fluffy vanilla cupcake filled with a rich peanut butter filling and topped with creamy peanut butter frosting.",
    image: image6,
    price: "$21.99",
    ingridients: "Eggs, Gluten, Milk",
    rating: 5,
    quantity: 0,
  },
];

const ProductLandingPage = (props) => {
  // console.log("TEST DATA " + props.testData);
  // props.AddCartDetails(ProductDetails);
  const AddCartDetailsPage = (cart) => {
    props.AddCartDetails(cart);
  };

  return (
    <>
      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <ProductLandingSection AddCartDetailsPage={AddCartDetailsPage}>
        {products[0]}
      </ProductLandingSection>
      <ProductLandingSection AddCartDetailsPage={AddCartDetailsPage}>
        {products[1]}
      </ProductLandingSection>

      <Footer></Footer>
    </>
  );
};

const ProductLandingSection = (props) => {
  const dispatch = useDispatch();

  //   var quantity = 1;
  const [quantity, SetQuantity] = useState(1);
  const [priceTag, SetPriceTag] = useState(
    parseFloat(props.children.price.replace("$", ""))
  );

  // console.log("I AM HERE " + props.addToCartDetails.image);
  const handleCounterClickMinus = () => {
    if (quantity > 1) SetQuantity(quantity - 1);
    else SetQuantity(1);
    // document.getElementById("counter").append = quantity;
    // SetPriceTag(parseFloat(props.children.price.replace("$", "")) * quantity);
  };
  const handleCounterClickPlus = () => {
    SetQuantity(quantity + 1);
    // document.getElementById("counter").append = quantity;
    // SetPriceTag(parseFloat(props.children.price.replace("$", "")) * quantity);
  };
  var [ProductDetails, setProductDetails] = useState({
    // id: props.children.id,
    // title: props.children.title,
    // price: props.children.price,
    // quantity: props.children.quantity,
    // image: props.children.image,
  });

  const [handleState, SetHandleState] = useState(false);

  const handleAddToCart = () => {
    SetHandleState(true);
    // props.addToCartDetails.image = props.children.image;
    // console.log("I AM HERE " + props.AddCartDetails(ProductDetails));
    // props.AddCartDetails(ProductDetails);
    console.log("TEST1 QUANTITY  " + quantity);
    setProductDetails({
      id: props.children.id,
      title: props.children.title,
      price: props.children.price,
      quantity: props.children.quantity,
      image: props.children.image,
    });
    // setProductDetails((prevState) => ({
    //   ...prevState,
    //   quantity: quantity,
    // }));

    // console.log("TEST productQuantity  " + ProductDetails.quantity);

    setProductDetails((prevState) => ({
      ...prevState,
      quantity: quantity,
    }));
    dispatch(
      postItems({
        id: nanoid(),
        title: props.children.title,
        price: props.children.price,
        quantity: quantity,
        image: props.children.image,
        totalPrice:
          quantity * parseFloat(props.children.price.replace("$", "")),
      })
    );

    // console.log("TEST2 QUANTITY  " + quantity);

    // // props.AddCartDetailsPage(ProductDetails);
    // console.log("TEST POINT  " + ProductDetails.quantity);
    // console.log("TEST POINT2  " + quantity);
  };

  useEffect(() => {
    if (handleState) {
      console.log("ProductDetails in useEffect =" + ProductDetails);
      props.AddCartDetailsPage(ProductDetails);
      SetHandleState(false);
    }

    // setProductDetails((prevState) => ({
    //   ...prevState,
    //   quantity: quantity,
    // }));

    console.log("TEST productQuantity  " + ProductDetails.quantity);
  }, [handleState]);

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

  useEffect(() => {
    SetPriceTag(parseFloat(props.children.price.replace("$", "")) * quantity);
    console.log("priceTage " + priceTag);
  }, [quantity]);

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
            <h3>${priceTag.toFixed(2)}</h3>
          </article>
          <article id="quantity">
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
          <button
            // handleClick={handleAddToCart}
            // name={"Add to Cart" + " " + props.children.price}
            className="Button"
            onClick={handleAddToCart}
          >
            {"Add to Cart" + " $" + priceTag.toFixed(2)}
          </button>
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
export default ProductLandingPage;
