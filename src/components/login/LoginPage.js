import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
const LoginPage = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay close={props.onClick} setAlert={props.setAlert} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default LoginPage;
