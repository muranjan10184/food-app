import { makeStyles } from "@material-ui/core";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import checkoutFood from "./../actions/checkoutAction";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    width: 345,
    marginTop: 40,
    boxShadow: " 5px 5px 15px 5px #888888",
  },
  media: {
    height: 200,
  },
  description: {
    color: "#686b78",
    fontSize: 12,
  },
  rating: {
    backgroundColor: "#48c479",
    color: "#fff",
    fontWeight: 500,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  removeLine: {
    textDecoration: "none",
    color: "white",
  },

  subContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  veg: {
    height: "250px",
    width: "250px",
    borderRadius: 50,
    backgroundColor: "green",
    position: "absolute",
    top: 0,
    right: 0,
  },
});

const FoodCard = ({ name, description, price, rating, imgSrc }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState({});
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setOpen(true);
    let updatedQuantity;
    if (quantity === 0) {
      updatedQuantity = quantity + 1;
      setQuantity(updatedQuantity);
    }

    const orderNewFood = {
      name: name,
      description: description,
      price: price,
      rating: rating,
      quantity: updatedQuantity,
      imgSrc: imgSrc,
    };
    setSelectedFood(orderNewFood);
    dispatch(checkoutFood(orderNewFood));
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      const updatedQuantity = quantity - 1;
      const newOrderFood = { ...selectedFood, quantity: updatedQuantity };
      setQuantity(updatedQuantity);
      setSelectedFood(newOrderFood);
    }
  };

  const handleIncrease = () => {
    const updatedQuantity = quantity + 1;
    const newOrderFood = { ...selectedFood, quantity: updatedQuantity };
    setQuantity(updatedQuantity);
    setSelectedFood(newOrderFood);
  };

  const handleCheckout = (event) => {
    dispatch(checkoutFood(selectedFood));
    handleClose();
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imgSrc} title="Food" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
          <Box textAlign="left" className={classes.description}>
            {description}
          </Box>
        </Typography>
        <Typography
          className={classes.subContainer}
          variant="body2"
          gutterBottom
        >
          <Box component="span">&#x20B9; {price}</Box>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={handleAdd}
          >
            Add{" "}
          </Button>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
