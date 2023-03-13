import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/apiCalls";
import style from "./register.module.scss";

const Register = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (input.password === input.confirmPassword) {
      const { confirmPassword, ...others } = input;
      register(dispatch, others);
    }
  };

  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <h1>CREATE AN ACCOUNT</h1>
        <form action="">
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={handleInput}
          />
          <select name="role" onChange={handleInput}>
            <option>Buyer</option>
            <option>Seller</option>
          </select>

          <button onClick={handleRegister}>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
