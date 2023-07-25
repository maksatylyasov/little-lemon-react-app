import React from "react";
import { motion } from "framer-motion";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import Stack from "@mui/material/Stack";

const ProductCard = (props) => {
  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} className="card-specials">
        <img src={props.product.image} alt="cardimage1" />
        <h3 className="special-text-sub1">
          {props.product.title}{" "}
          <span className="price-tag">{props.product.price}</span>
        </h3>
        <p className="special-description">{props.product.description}</p>
        <Stack direction="row" spacing={0.5}>
          <a href="">Order a Delivery</a>
          <DeliveryDiningIcon />
        </Stack>
      </motion.div>
    </>
  );
};

export default ProductCard;
