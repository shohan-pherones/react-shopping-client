import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/products/cartSlice";
import { useGetAllProductsQuery } from "../features/products/productsApi";

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
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center">Something went wrong</p>
      ) : (
        <>
          <h2 className="section-title">New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div className="product" key={product.id}>
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-texts">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                  <div className="product-details">
                    <p className="product-price">
                      {currencyFormatter(product.price)}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="add-to-cart-btn"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
