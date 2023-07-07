import { createSlice } from "@reduxjs/toolkit";

export const basketTotalPrice = createSlice({
  name: "totalPrice",
  initialState: { value: 0 },
  reducers: {
    updateTotalPrice: (state, action) => {
      state.value = action.payload;
      console.log("basketTotalPrice Slice= " + state.value);
    },
  },
});

export default basketTotalPrice.reducer;

// export const totalPrice = (state) => state.totalPrice.value;
export const { updateTotalPrice } = basketTotalPrice.actions;

export const priceCounter = (state) => state.totalPrice.value;
