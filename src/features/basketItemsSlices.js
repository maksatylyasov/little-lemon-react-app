import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { id: "1", title: "First Post!", content: "Hello!" },
  // { id: "2", title: "Second Post", content: "More text" },
];

// const initialState2 = { totalPrice: 0 };

const basketItemsSlice = createSlice({
  name: "basketItems",
  initialState,
  reducers: {
    dummyReducer: (state, action) => {
      state.push(action.payload);
      console.log("DUMMY REDUCER= " + action.payload + ", STATE= " + state);
    },
    postItems: (state, action) => {
      state.push(action.payload);
      console.log(
        "POST ITEMS REDUCER= " + action.payload.totalPrice + ", STATE= " + state
      );
    },
    quantityPlus: (state, action) => {
      let filteredIndex = state.findIndex((x) => x.id == action.payload);

      state[filteredIndex].quantity += 1;
      state[filteredIndex].totalPrice = (
        parseFloat(state[filteredIndex].price.replace("$", "")) *
        state[filteredIndex].quantity
      ).toFixed(2);
      console.log(
        "QUANTITY PLUS: Quantity= " +
          state[filteredIndex].quantity +
          ", Total Price=" +
          state[filteredIndex].totalPrice
      );
    },
    quantityMinus: (state, action) => {
      let filteredIndex = state.findIndex((x) => x.id == action.payload);
      if (state[filteredIndex].quantity > 1) state[filteredIndex].quantity -= 1;
      state[filteredIndex].totalPrice = (
        parseFloat(state[filteredIndex].price.replace("$", "")) *
        state[filteredIndex].quantity
      ).toFixed(2);
      console.log(
        "QUANTITY MINUS: Quantity= " +
          state[filteredIndex].quantity +
          ", Total Price=" +
          state[filteredIndex].totalPrice
      );
    },
  },
});

// export const basketTotalPrice = createSlice({
//   name: "basketTotalPrice",
//   initialState2,
//   reducers: {
//     updateTotalPrice: (state, action) => {
//       state.totalPrice = action.payload;
//     },
//   },
// });

export const { postItems, dummyReducer, quantityPlus, quantityMinus } =
  basketItemsSlice.actions;

// export const { updateTotalPrice } = basketTotalPrice.actions;

export default basketItemsSlice.reducer;
