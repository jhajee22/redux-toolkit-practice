
//1 Imports
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//2 Initial State
const initialState = {
  data: [], // API se aaya report data
  loading: false, //koi request start nahi hui → isliye loading = false
  error: null,
  currentReportType: null, //Konsa report active hai
  requestId: null, //race condition avoid karne ke liye
};

//3 fetchReport
//Ye thunk dynamic API call karega 
// Yahan kya ho raha hai?
// endpoint mil raha hai
// payload mil raha hai
// API hit ho rahi hai
// response.data return ho raha hai
// important

// Yahan:

// state update nahi ho raha
// loading set nahi ho raha
// error set nahi ho raha
// Wo sab extraReducers me hoga.
export const fetchReport = createAsyncThunk(
"report/fetchReport",
async({endpoint})=>{
  const response = await axios.get(endpoint); // axios.get() ek response object return karta hai jisme:
// response = full object
// 👉 response.data = actual data (jo UI me use karte hain)
  return response.data;
}
);

//4 Reducer
const reportSlice = createSlice({
name:"report", // Store me kya banegi 
initialState,
reducers:{}, // Manula actions ke liye jagah hai ==== jaise future me clearReport,resetReport

//Thunk ke lifecycle actions handle honge: extraReducer me 
// pending
// fulfilled
// rejected


//5EXTRA REDUCER
// Abhi blank rakha hai, next step me bharenge.
extraReducers:(builder)=>{
builder.addCase(fetchReport.pending,(state,action)=>{ //5.1 PENDING
state.loading = true;//New request start ho rahi hai, isliye loading true
state.error = null; //old error clear karna hai
state.currentReportType = action.meta.arg.endpoint;//Current report track
state.requestId = action.meta.requestId;//Request ID set
});

builder.addCase(fetchReport.fulfilled,(state,action)=>{ // 5.2 FULFILLED 
if(state.requestId !== action.meta.requestId) return; // race condition check karna hai, agar requestId match nahi karta to ignore karna hai
state.loading = false;//Loading false karna hai, kyunki request complete ho chuki hai
state.data = action.payload; // API se aaya data set karna hai



});


builder.addCase(fetchReport.rejected,(state,action)=>{ // 5.3 REJECTED

// requestId check = senior level logic
// 👉 agar ye miss kiya → bug guaranteed
if(state.requestId !== action.meta.requestId)return;
state.loading = false;
state.error = action.error.message;})


}
});


//6 Export reducer ye store me register karne ke liye chahiye 
export default reportSlice.reducer;