const Product = ({ product, currencyFormatter, handleAddToCart }) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-texts">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <div className="product-details">
          <p className="product-price">{currencyFormatter(product.price)}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="add-to-cart-btn"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
