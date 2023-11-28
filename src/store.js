import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

const stock = createSlice({
  name: "stock",
  initialState: [1, 2, 3],
});

const products = createSlice({
  name: "products",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],

  reducers: {
    increaseCount(state, action) {
      // const product = state.find((i) => i.id === action.payload);
      // if (product) {
      //   product.count += 1;
      // }
      const n = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[n].count++;
    },
    addProducts(state, action) {
      console.log(action);
      console.log(products);

      state.push({
        id: action.payload.id,
        name: action.payload.name,
        count: 1,
      });
    },
  },
});

export const { increaseCount, addProducts } = products.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    products: products.reducer,
  },
});
