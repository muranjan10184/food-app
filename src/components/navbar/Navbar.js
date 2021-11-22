import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            <FoodBankIcon sx={{ fontSize: 80 }} />
          </Link>
        </Typography>
        <Link to="/home" className={classes.link}>
          Home
        </Link>
        <Link to="/menu" className={classes.link}>
          Menu
        </Link>
        <Link to="/contact" className={classes.link}>
          Contact Us
        </Link>
        <Link to="/login" className={classes.link}>
          Login
        </Link>
        <Link to="/register" className={classes.link}>
          Register
        </Link>
        <Link to="/cart" className={classes.link}>
          <ShoppingCartIcon />
          Cart
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
