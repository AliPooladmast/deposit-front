import { ShoppingCartOutlined } from "@mui/icons-material";
import style from "./ProductItem.module.scss";

const ProductItem = ({ item }) => {
  const handleAddClick = () => {};

  return (
    <div className={style.Wrapper}>
      <div className={style.Container}>
        <div className={style.ImgContainer}>
          <img src={item.img} alt="" />
        </div>
        <div className={style.Info}>
          <div onClick={handleAddClick}>
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
      <div className={style.Title}>
        <div>{item.productName}</div>
        <div className={style.Price}>${item.cost}</div>
      </div>
    </div>
  );
};

export default ProductItem;
