import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import style from "./login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({});
  const { currentUser } = useSelector((state) => state.user);

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, input);
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/products");
    }
  }, [currentUser]); //eslint-disable-line

  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <h1>SIGN IN</h1>
        <form action="">
          <div className={style.InputContainer}>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={handleInput}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={handleInput}
            />
            <a href="register">Create an account</a>
          </div>
          <div className={style.LoginButton}>
            <button onClick={handleClick}>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
