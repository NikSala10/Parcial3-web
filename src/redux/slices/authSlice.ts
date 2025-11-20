import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type User = {
    name: string,
    role: "manager" | "customer"
}
type InitialState = {
  user: User | null
}

const initialState: InitialState = {
  user: null
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }, 
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;