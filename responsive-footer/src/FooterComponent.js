import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline, Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import footerAdornment from "./assets/Footer Adornment.svg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";

const useStyles = makeStyles((theme) => {
  return {
    footer: {
      backgroundColor: "#b7472a",
      width: "100%",
      zIndex: 1302,
      position: "relative",
      marginTop: "-50px"
    },
    adorment: {
      width: "25em",
      verticalAlign: "bottom",
      [theme.breakpoints.down("md")]: {
        width: "21em"
      },
      [theme.breakpoints.down("sm")]: {
        width: "18em"
      }
    },
    mainContainer: {
      position: "absolute" //This means we can move all the elements in the container regardles of other elements
    },
    link: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none"
    },

    gridItem: {
      margin: "3rem"
    },
    icon: {
      height: "3rem",
      width: "3rem",
      [theme.breakpoints.down("xs")]: {
        height: "2rem",
        width: "2rem"
      }
    },
    socialContainer: {
      position: "absolute",
      marginTop: "-6em",
      right: "1.5em",
      [theme.breakpoints.down("xs")]: {
        right: "0.8em"
      }
    }
  };
});

const FooterComponent = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <CssBaseline />
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            {/* Item 1 */}
            <Grid className={classes.sub} container direction="column">
              <Grid className={classes.link} item>
                Home
              </Grid>
              <Grid item component={Link} to="/">
                Home
              </Grid>
              <Grid item>Home</Grid>
            </Grid>
          </Grid>

          {/* Item 2 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link} component={Link} to="/">
                Services
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                Mobile
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                Website
              </Grid>
              <Grid item className={classes.link} component={Link} to="/">
                Custom Website
              </Grid>
            </Grid>
          </Grid>

          {/* Item3 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Revolution
              </Grid>
              <Grid item className={classes.link}>
                Process
              </Grid>
              <Grid item className={classes.link}>
                Technology
              </Grid>
            </Grid>
          </Grid>
          {/* Item4 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                History
              </Grid>
              <Grid item className={classes.link}>
                About
              </Grid>
            </Grid>
          </Grid>

          {/* Item5 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid item className={classes.link}>
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img className={classes.adorment} src={footerAdornment} alt="footer" />

      {/* SOCIAL MEDIA ICONS */}
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}>
        <Grid
          item
          component={"a"}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank">
          <img src={facebook} alt="facebook" className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="http://twitter.com">
          <img src={twitter} alt="twitter" className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="http://www.instagram.com">
          <img src={instagram} alt="instagram" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterComponent;
