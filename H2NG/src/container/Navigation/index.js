import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import { fade } from "@material-ui/core/styles/colorManipulator"
import { withStyles } from "@material-ui/core/styles"
import NavbarMenu from "./NavbarMenu"
import AffinionLogo from "../../assets/images/affinion-white.png"

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  navbar: {
    display: "-webkit-inline-box"
  },
  logo: {
    height: 36,
    padding: 6
  }
})

class Navbar extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <div>
            <img className={classes.logo} src={AffinionLogo} />
          </div>
          <NavbarMenu />
        </AppBar>
      </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navbar)
