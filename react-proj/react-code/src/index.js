/* eslint-disable */
import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { persistor } from "./store/"
import { PersistGate } from "redux-persist/lib/integration/react"
import store from "./store/index"
import App from "./App"
require("typeface-work-sans")

// import AppRoutes from "./routes";

//expose the persistor to the window so we can flush the local storage through the console...
window.persistor = persistor

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
)
