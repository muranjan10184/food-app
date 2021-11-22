import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import FoodQuantity from "./FoodQuantity";
import Notification from "./Notification";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  List,
  Button,
} from "@mui/material";
import { decreaseQuantity,increaseQuantity } from "../actions/checkoutAction";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  cover: {
    width: 250,
  },
  chip: {
    margin: 5,
  },
  subtitle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    color: "green",
    fontWeight: 600,
  },
  controls: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Checkout = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const checkoutList = useSelector((state) => state.checkoutReducer);
  const [open, setOpen] = React.useState(false);

  const handleOrder = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleIncrease= (quantity) =>{
    return (quantity) => {
    dispatch(increaseQuantity(quantity));
  }
};
  const handleDecrease= (quantity)=>(quantity) => {
   return  dispatch(decreaseQuantity(quantity))
  }
};

  if (checkoutList.length === 0)
    return <p>No Items Available, Please Add Some...</p>;
  return (
    <div>
      <Typography component="h5" variant="h5">
        Checkout
      </Typography>
      <List className={classes.root}>
        {checkoutList.map((value) => {
          const labelId = `checkbox-list-label-${value.name}`;
          return (
            <div>
              <Card className={classes.card} key={labelId}>
                <CardMedia
                  className={classes.cover}
                  image={value.imgSrc}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent>
                    <Typography component="h5" variant="h5">
                      {value.name}
                    </Typography>
                    <div className={classes.subtitle}>
                      <Typography variant="subtitle1" className={classes.price}>
                        <Box component="span">
                          &#x20B9; {value.price * value.quantity}
                        </Box>
                      </Typography>
                    </div>
                  </CardContent>
                  <div className={classes.controls}>
                    <FoodQuantity
                      quantity={value.quantity}
                      onIncrease={handleIncrease(value.quantity)}
                      onDecrease={handleDecrease(value.quantity)}
                    />
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      onClick={handleOrder}
                    >
                      Order Now
                    </Button>
                    <Notification onClose={handleClose} open={open}>
                      Order Placed
                    </Notification>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default Checkout;
