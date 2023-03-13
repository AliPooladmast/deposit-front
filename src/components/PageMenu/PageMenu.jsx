import {
  HowToReg,
  Login,
  Logout,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import { userRequest } from "../../requestMethods";
import { resetCart } from "../../redux/cartSlice";

const PageMenu = ({
  ItemClassName,
  TitlesClassName,
  SelectedClassName,
  currentUser,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCart());
    userRequest.defaults.headers.token = "";
  };

  return (
    <>
      <div
        className={`${ItemClassName} ${
          location.pathname === "/cart" ? SelectedClassName : ""
        }`}
        onClick={() => navigate("/cart")}
      >
        <span className={TitlesClassName}>Cart</span>
        <Badge badgeContent={quantity} color="primary" overlap="rectangular">
          <ShoppingCartOutlined />
        </Badge>
      </div>

      {currentUser ? (
        <>
          <div
            className={`${ItemClassName} ${
              location.pathname === "/login" ? SelectedClassName : ""
            }`}
            onClick={handleLogout}
          >
            <span className={TitlesClassName}>Logout</span>
            <Logout />
          </div>
        </>
      ) : (
        <>
          <div
            className={`${ItemClassName} ${
              location.pathname === "/register" ? SelectedClassName : ""
            }`}
            onClick={() => navigate("/register")}
          >
            <span className={TitlesClassName}>Register</span>
            <HowToReg />
          </div>

          <div
            className={`${ItemClassName} ${
              location.pathname === "/login" ? SelectedClassName : ""
            }`}
            onClick={() => navigate("/login")}
          >
            <span className={TitlesClassName}>Sign In</span>
            <Login />
          </div>
        </>
      )}
    </>
  );
};

export default PageMenu;
