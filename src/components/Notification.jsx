import { Alert } from "@material-ui/lab";
import Snackbar from "@mui/material/Snackbar";

function alert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

const Notification = ({ open, onClose, children }) => {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity="success">
          {children}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Notification;
