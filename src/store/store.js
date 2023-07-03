import { configureStore } from "@reduxjs/toolkit";
import basketItemsReducer from "../features/basketItemsSlices";
import basketTotalPriceReducer from "../features/basketTotalPrice";

export default configureStore({
  reducer: {
    basketItems: basketItemsReducer,
    totalPrice: basketTotalPriceReducer,
  },
});
