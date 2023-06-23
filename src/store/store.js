import { configureStore } from "@reduxjs/toolkit";
import basketItemsReducer from "../features/basketItemsSlices";

export default configureStore({
  reducer: {
    basketItems: basketItemsReducer,
  },
});
