import React, { Component } from "react"
import Grid from "@material-ui/core/Grid"
import AffinionLogo from "../../assets/images/affinion.png"

class SignIn extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="login-panel">
        <Grid item xs={5} className="loginbgcolor">
          <div className="login-heading">
            <p>H2NG ETL Platform</p>
            <h2>
              Helix to NextGen scalable, secure, enterprise Big Data ETL
              platform
            </h2>
          </div>
          <div className="login-form">
            <div className="logo-container">
              <p>Welcome Back, Please login to your account</p>
            </div>

            <div className="input-wrapper">
              <input placeholder="Username" type="text" />
            </div>

            <div className="input-wrapper">
              <input placeholder="Password" type="password" />
            </div>
            <div className="button-container">
              <button>SIGNIN</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={7} className="loginbgimage">
          <div className="logo">
            <img src={AffinionLogo} alt={AffinionLogo} />
          </div>
        </Grid>
      </div>
    )
  }
}

export default SignIn
