import { makeStyles, Button } from "@material-ui/core";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  quantityContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 15px",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    color: "#3f51b5",
  },

  foodQuantity: {
    padding: "0 10px",
  },

  quantity: {
    fontWeight: 700,
  },
});

const FoodQuantity = ({ quantity, onIncrease, onDecrease }) => {
  const classes = useStyles();
  return (
    <div className={classes.quantityContainer}>
      <div className={classes.btnContainer}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={onDecrease(quantity)}
        >
          -
        </Button>
        <Box component="span" className={classes.foodQuantity}>
          {quantity}
        </Box>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={onIncrease(quantity)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default FoodQuantity;
