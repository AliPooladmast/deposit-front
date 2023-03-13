import NavBar from "../../components/NavBar/NavBar";
import style from "./cart.module.scss";
import { Add, Close, Remove, ShoppingCart } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "../../redux/cartSlice";
import { userRequest } from "../../requestMethods";
import { useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const [deposit, setDeposit] = useState("0");
  const cart = useSelector((state) => state.cart);

  const onDeleteProduct = (product) => {
    dispatch(deleteProduct(product));
  };

  const handleQuantity = (type, product) => {
    if (type === "inc") {
      dispatch(incrementProduct(product));
    } else if (type === "dec") {
      product.quantity > 1 && dispatch(decrementProduct(product));
    }
  };

  const handleDeposit = async () => {
    try {
      const res = await userRequest.put("users/perform/deposit", {
        deposit: "20",
      });
      if (res) {
        setDeposit(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckout = () => {};

  return (
    <div className={style.Container}>
      <NavBar />
      <div className={style.Wrapper}>
        <h1>My Cart</h1>
        <div className={style.Top}>
          <Link to="/products">
            <button className={style.Button}>CONTINUE SHOPPING</button>
          </Link>

          <div>
            <input className={style.Input} type="text" />
            <button className={style.Button} onClick={handleDeposit}>
              DEPOSIT NOW
            </button>
          </div>
        </div>

        <div className={style.Bottom}>
          <div
            className={
              cart.products.length > 0 ? style.Info : style["Info--Empty"]
            }
          >
            {cart.products.length > 0 ? (
              <>
                {cart.products.map((product) => (
                  <div className={style.ProductContainer} key={product._id}>
                    <div className={style.Product}>
                      <div className={style.ProductDetail}>
                        <img src={product.img} alt="" />
                        <div className={style.Detail}>
                          <span>
                            <b>Product:</b> {product.productName}
                          </span>
                        </div>
                      </div>

                      <div className={style.PriceDetail}>
                        <div className={style.AmountContainer}>
                          <Remove
                            className={style.ChangeValue}
                            onClick={() => handleQuantity("dec", product)}
                          />
                          <span>{product.quantity}</span>
                          <Add
                            className={style.ChangeValue}
                            onClick={() => handleQuantity("inc", product)}
                          />
                        </div>

                        <div className={style.ProductPrice}>
                          $ {(product.cost * product.quantity)?.toFixed(1)}
                        </div>
                      </div>
                      <div
                        className={style.IconContainer}
                        onClick={() => onDeleteProduct(product)}
                      >
                        <Close className={style.CloseIcon} />
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              </>
            ) : (
              <div className={style.EmptyCart}>
                <ShoppingCart />
                <span>Your cart is empty!</span>
              </div>
            )}
          </div>
          <div className={style.Summary}>
            <h1>Order Summary</h1>

            <div className={style.SummaryItem}>
              <span className={style.SummatyItemText}>Deposit</span>
              <span className={style.SummatyItemPrice}>{deposit}</span>
            </div>

            <div className={style.SummaryItem}>
              <span className={style.SummatyItemText}>SubTotal</span>
              <span className={style.SummatyItemPrice}>
                $ {cart.total?.toFixed(1)}
              </span>
            </div>

            <div className={style.CheckoutButton}>
              {cart.products.length > 0 && (
                <button onClick={handleCheckout}>CHECKOUT NOW</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
