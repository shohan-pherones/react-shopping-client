import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "./features/products/productsApi";
import { addToCart } from "./features/products/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

const App = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currencyFormatter = (price) =>
    price.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("cart");
  };

  const isNavActiveStyles = ({ isActive }) => {
    return {
      color: isActive ? "#f9fafb" : null,
    };
  };

  return (
    <>
      <div className="bg-gray-50 text-gray-700 min-h-screen pb-20">
        <Navbar isNavActiveStyles={isNavActiveStyles} />
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoading={isLoading}
                error={error}
                data={data}
                currencyFormatter={currencyFormatter}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="shop"
            element={
              <Products
                isLoading={isLoading}
                error={error}
                data={data}
                currencyFormatter={currencyFormatter}
                handleAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="cart"
            element={<Cart currencyFormatter={currencyFormatter} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer isNavActiveStyles={isNavActiveStyles} />
    </>
  );
};

export default App;
