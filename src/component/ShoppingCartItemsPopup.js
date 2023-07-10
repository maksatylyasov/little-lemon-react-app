import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

const ShoppingCartItemsPopup = () => {
  const basketItems = useSelector((state) => state.basketItems);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <div>
        <Typography
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          X
        </Typography>
        <Popover
          id="mouse-over-popover"
          sx={{
            pointerEvents: "none",
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Box
            sx={{
              width: 500,
              height: 500,
              backgroundColor: "primary.white",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <section className="shopping-cart-popup">
              {basketItems.map((element) => (
                <ShoppingCartItem>{element}</ShoppingCartItem>
              ))}
            </section>
          </Box>
        </Popover>
      </div>
    </>
  );
};

export default ShoppingCartItemsPopup;
