// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    plusNumber: (state, action) => {
      state.result += action.payload;
    },
    minusNumber: (state, action) => {
      state.result -= action.payload;
    },
  },
});

export const { plusNumber, minusNumber } = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
