import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import * as foodApi from "../services/foodApi";

const useStyles = makeStyles((theme) => ({
  cardList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  menu: {
    display: "flex",
    justifyContent: "space-around",
    background: "#ccc",
    width: "100%",
    height: "25%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FoodList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const foodList = useSelector((state) => state.foodReducer);
  const [isVeg, setIsVeg] = useState(false);
  const [allChecked, setAllChecked] = useState(true);
  const [order, setOrder] = useState("");
  const [ratingOrder, setRatingOrder] = useState("");
  const [filteredFoodList, setFilteredFoodList] = useState([]);
  console.log(foodList);
  const handlePriceChange = (event) => {
    const selectedValue = event.target.value;
    const previousList = JSON.parse(JSON.stringify(filteredFoodList));
    setOrder(selectedValue);
    if (selectedValue === "none") {
      setFilteredFoodList(foodList);
    } else if (selectedValue === "asc") {
      const sortedList = previousList.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      setFilteredFoodList(sortedList);
    } else if (selectedValue === "desc") {
      const sortedList = previousList.sort((a, b) =>
        a.price < b.price ? 1 : -1
      );
      setFilteredFoodList(sortedList);
    }
  };

  const handleRatingChange = (event) => {
    const selectedValue = event.target.value;
    const previousList = JSON.parse(JSON.stringify(filteredFoodList));
    setRatingOrder(selectedValue);
    if (selectedValue === "none") {
      setFilteredFoodList(foodList);
    } else if (selectedValue === "low") {
      const sortedList = previousList.sort((a, b) =>
        a.rating > b.rating ? 1 : -1
      );
      setFilteredFoodList(sortedList);
    } else if (selectedValue === "high") {
      const sortedList = previousList.sort((a, b) =>
        a.rating < b.rating ? 1 : -1
      );
      setFilteredFoodList(sortedList);
    }
  };

  const handleToggleChange = (event) => {
    const toggleChecked = event.target.checked;
    setIsVeg(toggleChecked);
    setAllChecked(false);
    setFilteredFoodList(() =>
      foodList.filter((food) => food.isVeg === toggleChecked)
    );
  };

  const handleCheckboxChange = (event) => {
    setAllChecked(event.target.checked);
    setFilteredFoodList(foodList);
  };

  useEffect(() => {
    dispatch(foodApi.loadFoods());
    setFilteredFoodList(foodList);
  }, []);

  useEffect(() => {
    setFilteredFoodList(foodList);
  }, [foodList]);

  if (filteredFoodList.length === 0) return <p>Loading...</p>;
  return (
    <div>
      <div className={classes.menu}>
        <FormControlLabel
          control={
            <Checkbox
              checked={allChecked}
              color="primary"
              onChange={handleCheckboxChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          label="All"
        />
        <FormControlLabel
          disabled={allChecked}
          control={
            <Switch
              checked={isVeg}
              onChange={handleToggleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Veg"
          labelPlacement="start"
        />

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Sort By Price
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={order}
            onChange={handlePriceChange}
            label="Sort By"
          >
            <MenuItem value={"none"}>None</MenuItem>
            <MenuItem value={"asc"}>Price: Low to High</MenuItem>
            <MenuItem value={"desc"}>Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.cardList}>
        {filteredFoodList &&
          filteredFoodList.map((food) => {
            return (
              <FoodCard
                key={food.id}
                name={food.name}
                description={food.description}
                imgSrc={food.img_url}
                price={food.price}
                rating={food.rating}
              />
            );
          })}
      </div>
    </div>
  );
};

export default FoodList;
