import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div>
      <nav>
        <Link to="/">
          <h2>React Shopping</h2>
        </Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
        </div>
        <Link to="cart">
          <span>
            <BsBag />
          </span>
          <span>{cartTotalQuantity}</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
