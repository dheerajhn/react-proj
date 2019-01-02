import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import Navbar from "../Navigation/index"

class Landing extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="landingUnit">
          <div className="landingContent">
            <h2>
              Welcome to H2NG ETL Platform
          </h2>
          </div>
          <Grid className="landingCard">
            <Grid item xs={6} className="cardWork">
              <div className="cardDiscription">
                <h3>WORK</h3>
                <hr />
                <a href="#">Open Files</a>
                <a href="#">New Transformation</a>
                <a href="#">New Job</a>
              </div>
            </Grid>
            <Grid item xs={6} className="cardWork">
              <div className="cardDiscription">
                <h3>HELP US</h3>
                <hr />
                <a href="#">Documentation</a>
                <a href="#">Watch Tutorials</a>
                <a href="#">Release Notes</a>
              </div>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default Landing
