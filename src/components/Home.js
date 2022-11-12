import Categories from "./Categories";
import Hero from "./Hero";
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
      <Hero />
      <Categories
        isLoading={isLoading}
        error={error}
        data={data}
        currencyFormatter={currencyFormatter}
        handleAddToCart={handleAddToCart}
      />
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
