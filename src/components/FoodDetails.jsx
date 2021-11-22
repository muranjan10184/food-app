import { DialogActions, makeStyles } from "@material-ui/core";
import { DialogTitle } from "@mui/material";
import { Button } from "bootstrap";
import { Dialog } from "material-ui";
import React from "react";
import FoodQuantity from './FoodQuantity'

const useStyles = makeStyles({
    radioGroup:{
        margin:10
    }
});

const FoodDetails = React.memo((props) =>{
    const classes = useStyles();
    const { onClose, open, quantity, onIncrease, onDecrease, onCheckout }= props;

    return (
      <div className={classes.dialogBox}>
        <Dialog
          onClose={onClose}
          aria-labelledby="simple-dialog-title"
          open={open}
        >
          <DialogTitle id="simple-dialog-title">
              Add to Cart 
          </DialogTitle>
          <DialogActions>
              <FoodQuantity 
              quantity={quantity}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              />
              <Button onClick={onCheckout} color="primary" variant="outlined" size="small">Checkout</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
})

export default FoodDetails;