import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import Icon from "@material-ui/core/Icon"
import IconButton from "@material-ui/core/IconButton"
import DashboardIcon from "@material-ui/icons/Dashboard"
import { withStyles } from "@material-ui/core/styles"
import PersonIcon from "@material-ui/icons/Person"
import { Grid } from "@material-ui/core"
import Tooltip from "@material-ui/core/Tooltip"

const styles = theme => ({
  navmenu: {
    paddingLeft: 60,
    paddingTop: 2
  },
  menuicon: {
    color: "#fff"
  },
  vmenu: {
    position: "absolute",
    right: 0,
    paddingTop: 2
  }
})

class NavbarMenu extends Component {
  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <div className={classes.navmenu}>
          <Tooltip title="Configure">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <Icon className="iconetl icon-config-manager" />
            </IconButton>
          </Tooltip>
          <Tooltip title="ETL Design">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <Icon className="iconetl icon-etl-design" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Activity">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <Icon className="iconetl icon-activity" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reports">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <Icon className="iconetl icon-reports" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Scheduler">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <Icon className="iconetl icon-jobs" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Dashboard">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <DashboardIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="User Manager">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <PersonIcon />
            </IconButton>
          </Tooltip>
        </div>
        <div className={classes.vmenu}>
          <Tooltip title="Signout">
            <IconButton
              color="secondary"
              className={classes.menuicon}
              aria-label="Add an alarm"
            >
              <PersonIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Fragment>
    )
  }
}

NavbarMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavbarMenu)
