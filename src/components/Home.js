import Products from "./Products";

const Home = ({
  isLoading,
  error,
  data,
  currencyFormatter,
  handleAddToCart,
}) => {
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
