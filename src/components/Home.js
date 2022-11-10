import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { useGetAllProductsQuery } from "../features/products/productsApi";
import Products from "./Products";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currencyFormatter = (price) =>
    price.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("cart");
  };

  return (
    <section className="home">
      <Products
        isLoading={isLoading}
        error={error}
        data={data}
        currencyFormatter={currencyFormatter}
        handleAddToCart={handleAddToCart}
      />
    </section>
  );
};

export default Home;
