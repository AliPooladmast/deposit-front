import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { publicRequest } from "../../requestMethods";
import style from "./ProductList.module.scss";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        if (res) {
          setProducts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className={style.Container}>
      <div className={style.Products}>
        <div className={style.Wrapper}>
          {products?.length > 0 &&
            products.map((item) => <ProductItem item={item} key={item._id} />)}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
