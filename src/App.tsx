import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/products" element={<ProductList />}></Route>
      </Routes>
    </>
  );
};

export default App;
