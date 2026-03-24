
import { configureStore } from "@reduxjs/toolkit";
import reportReducer from "../features/reportSlice"; 
export const store = configureStore({
  // configureStore Redux Toolkit ka modern store creator
  reducer: {
     report: reportReducer, // Here report is the state & reportReducer is function to update state 



// Yahi sabse important line hai from here 
// state = {
//   report: {
//     data: [],
//     loading: false,
//     error: null,
//     currentReportType: null,
//     requestId: null, 
 // },
//}; to here learning point hai ki reducer me jo key hai wo state me bhi wahi key banegi, aur uske andar jo value hai wo reportSlice ke initialState se aayegi.

  },
});