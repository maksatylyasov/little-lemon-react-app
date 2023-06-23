import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // { id: "1", title: "First Post!", content: "Hello!" },
  // { id: "2", title: "Second Post", content: "More text" },
];

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
        "POST ITEMS REDUCER= " + action.payload + ", STATE= " + state
      );
    },
    quantityPlus: (state, action) => {
      let filteredIndex = state.findIndex((x) => x.id == action.payload);

      state[filteredIndex].quantity += 1;
    },
    quantityMinus: (state, action) => {
      let filteredIndex = state.findIndex((x) => x.id == action.payload);
      if (state[filteredIndex].quantity > 1) state[filteredIndex].quantity -= 1;
    },
  },
});
export const { postItems, dummyReducer, quantityPlus, quantityMinus } =
  basketItemsSlice.actions;

export default basketItemsSlice.reducer;
