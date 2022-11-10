import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return <nav></nav>;
};

export default Navbar;
