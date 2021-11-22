import { Badge, IconButton } from "material-ui";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/styles";

const StyledBadge = withStyles((theme) => ({
    badge:{
        right: -3,
        top:13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding:'0 4px'
    },
}))(Badge);

export default function CustomizedCart(){
    const checkoutList = useSelector(state => state.checkoutList);
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={checkoutList.length} color="secondary">
                <ShoppingCartIcon style={{color:'#fff'}}/>
            </StyledBadge>
        </IconButton>
    );
}