import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface Product {
  id: string | number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string
}

export interface InitialState {
  products: Product[];
}

const initialState: InitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = [...state.products, action.payload];
    },
    deleteProduct: (state, action: PayloadAction<number | string>) => {
      state.products = state.products.filter((product) => 
        product.id !== action.payload
      )
    },
  },
});

export const { setProducts,  deleteProduct, addProduct} = productSlice.actions;
export default productSlice.reducer;