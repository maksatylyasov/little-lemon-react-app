import React from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ShoppingCartPriceDetails = (props) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const totalBasketPrice = useSelector((state) => state.totalPrice.value);
  return (
    <>
      <section>
        <article>
          <h5>ADD A TIP</h5>
          {/* <article className="add-tip">
      <div className="active">10%</div>
      <div>15%</div>
      <div>20%</div>
      <div>Other</div>
    </article> */}
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            size="large"
          >
            <ToggleButton
              value="left"
              aria-label="left aligned"
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {/* <FormatAlignLeftIcon /> */}
              <div>10%</div>
              <div>$9</div>
            </ToggleButton>
            <ToggleButton
              value="center"
              aria-label="centered"
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>15%</div>
              <div>$9</div>
            </ToggleButton>
            <ToggleButton
              value="right"
              aria-label="right aligned"
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>20%</div>
              <div>$9</div>
            </ToggleButton>
            <ToggleButton
              value="justify"
              aria-label="justified"
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div>Other</div>
            </ToggleButton>
          </ToggleButtonGroup>
        </article>

        <article>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <LocalOfferIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Add coupon or gift card"
              variant="standard"
            />
          </Box>
        </article>
        <article>
          <p>Subtotal: {totalBasketPrice}</p>
          <p>Estimated Taxes: {}</p>
          <p>Tip: {}</p>
          <p>
            <strong>Estimated order total: {}</strong>
          </p>
        </article>
        <button className="Button">Continue to payment</button>
      </section>
    </>
  );
};

export default ShoppingCartPriceDetails;
