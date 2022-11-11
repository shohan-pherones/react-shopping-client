const Product = ({ product, currencyFormatter, handleAddToCart }) => {
  return (
    <div className="product w-80 overflow-hidden shadow-lg bg-white">
      <div className="product-img h-80 overflow-hidden flex justify-center items-center">
        <img src={product.image} alt={product.name} className="w-full block" />
      </div>
      <div className="product-texts p-5 flex flex-col gap-3">
        <h3 className="product-name text-xl h-24">{product.name}</h3>
        <p className="product-desc text-gray-400 h-28">{product.description}</p>
        <div className="product-details flex justify-between items-center">
          <p className="product-price text-xl text-rose-500">
            {currencyFormatter(product.price)}
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="add-to-cart-btn bg-gray-700 text-gray-50 px-5 py-2 uppercase tracking-widest font-medium hover:bg-cyan-500 duration-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
