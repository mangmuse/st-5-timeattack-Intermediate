import { configureStore } from "@reduxjs/toolkit";
import { calculatorReducer } from "../slices/calculatorSlice";

// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
});
export default store;
