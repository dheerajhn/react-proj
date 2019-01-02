import React from "react"
import { render } from "react-dom"
import { BrowserRouter, Route, Switch, Router } from "react-router-dom"
import SignIn from "./container/SIgnIn/SignIn"
import Landing from "./container/Landing/index"
import "./assets/sass/main.scss"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/Landing" component={Landing} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
