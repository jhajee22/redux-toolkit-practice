import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);


// Provider

// Ye React app ko Redux store access deta hai.

// store={store}

// Yahi actual Redux store app me inject karta hai.

// Result

// Ab app ke kisi bhi component me:

// useDispatch()
// useSelector()

// use kar sakte ho.