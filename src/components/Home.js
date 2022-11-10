import Products from "./Products";

const Home = ({
  isLoading,
  error,
  data,
  currencyFormatter,
  handleAddToCart,
}) => {
  return (
    <div>
      <Products
        isLoading={isLoading}
        error={error}
        data={data}
        currencyFormatter={currencyFormatter}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Home;
