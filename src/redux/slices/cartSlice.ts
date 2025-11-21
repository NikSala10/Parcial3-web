import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string
  total?: number
}

export interface InitialState {
  cart: Product[];
}

const initialState: InitialState = {
  cart: [],
};

const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Product>) => {
      state.cart = [...state.cart, action.payload];
    },
                                                                                                                                 
    clearCart: (state) => {
      state.cart = [];
    },
     deleteItem: (state, action: PayloadAction<number | string>) => {
      state.cart = state.cart.filter((product) => 
        product.id !== action.payload
      )
    },
  },
});

export const {setCart, clearCart, deleteItem} = productSlice.actions;
export default productSlice.reducer;