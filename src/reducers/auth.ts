import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

// declaring the types for our state
export type AuthState = {
  value: boolean;
  token: string | null;
};

const initialState: AuthState = {
  value: false,
  token: null,
};

export const counterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.value = true;
      state.token = action.payload;
    },
    logOut: (state) => {
      state.value = false;
    },
  },
});

export const { logIn, logOut } = counterSlice.actions;

export const selectCount = (state: RootState) => state.auth.value;
export default counterSlice.reducer;
