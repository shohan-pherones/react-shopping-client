import { FiLoader } from "react-icons/fi";
import Product from "./Product";

const Products = ({
  isLoading,
  error,
  data,
  currencyFormatter,
  handleAddToCart,
}) => {
  return (
    <>
      {isLoading ? (
        <span className="loader">
          <FiLoader />
        </span>
      ) : error ? (
        <p className="error-message">Something went wrong</p>
      ) : (
        <>
          <h2 className="section-title">New Arrivals</h2>
          <div className="products-wrapper">
            {data?.map((product) => (
              <Product
                key={product.id}
                product={product}
                currencyFormatter={currencyFormatter}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Products;
