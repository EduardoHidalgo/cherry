import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Fragment>
      <Button
        variant="contained"
        href="dashboard/MobileDashboard"
        className={classes.button}
        color="primary"
      >
        Mobile Dashboard
      </Button>
      <Button
        variant="contained"
        href="dashboard/PermanentDashboard"
        className={classes.button}
        color="primary"
      >
        Permanent Dashboard
      </Button>
      <Button
        variant="contained"
        href="dashboard/PersistentDashboard"
        className={classes.button}
        color="primary"
      >
        Persistent Dashboard
      </Button>
      <Button
        variant="contained"
        href="dashboard/TemporaryDashboard"
        className={classes.button}
        color="primary"
      >
        Temporary Dashboard
      </Button>
      <Button
        variant="contained"
        href="dashboard/ElevationFeature"
        className={classes.button}
        color="primary"
      >
        Elevation Feature
      </Button>
      <Button
        variant="contained"
        href="dashboard/HideFeature"
        className={classes.button}
        color="primary"
      >
        Hide Feature
      </Button>
    </Fragment>
  );
}
