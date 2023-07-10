import React from "react";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import visa from "../assets/payment-icons/visa.png";
import apple from "../assets/payment-icons/apple-pay.png";
import google from "../assets/payment-icons/google-pay.png";
import mastercard from "../assets/payment-icons/mastercard.png";
import amex from "../assets/payment-icons/amex.png";
import discover from "../assets/payment-icons/discover.png";
import jcb from "../assets/payment-icons/jcb.png";
import cashapp from "../assets/payment-icons/cashapp.png";
import paypal from "../assets/payment-icons/paypal.png";
import shopify from "../assets/payment-icons/shopify.png";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const CheckoutFooter = () => {
  const imageStyle = { width: "100%", height: "100%" };
  return (
    <>
      <Divider
        style={{ marginLeft: "10%", marginRight: "10%", marginBottom: "5%" }}
      />
      <Box className="payments-footer">
        <Stack direction="column" spacing={2}>
          <Avatar variant="square" src={shopify} />
          <Typography variant="caption" display="block" gutterBottom>
            Powered by Shopify
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Avatar variant="square" src={visa} />
          <Avatar variant="square" src={mastercard} />
          <Avatar variant="square" src={apple} />
          <Avatar variant="square" src={google} />
          <Avatar variant="square" src={amex} />
          <Avatar variant="square" src={discover} />
          <Avatar variant="square" src={jcb} />
          <Avatar variant="square" src={cashapp} />
          <Avatar variant="square" src={paypal} />
        </Stack>
      </Box>
      <Divider
        style={{ marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}
      />
    </>
  );
};

export default CheckoutFooter;
