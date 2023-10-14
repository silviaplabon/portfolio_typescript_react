import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IEmailInput } from "./type";

const initialState: IEmailInput = {
  name: "",
  email: "",
  text: "",
  phone: "",
};

const EmailInputSlice = createSlice({
  name: "emailInput",
  initialState,
  reducers: {
    updateEmailInput: (state, action: PayloadAction<Partial<IEmailInput>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEmailInput } = EmailInputSlice.actions;
export default EmailInputSlice.reducer;
