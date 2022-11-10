import { FiLoader } from "react-icons/fi";

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
    </>
  );
};

export default Products;
