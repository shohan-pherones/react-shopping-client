import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = ({ isNavActiveStyles }) => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="bg-gray-700 text-gray-50">
      <nav className="mx-auto sm:h-20 flex sm:justify-between items-center px-10 flex-col sm:flex-row justify-center gap-5 sm:gap-0 h-auto py-5 sm:py-0">
        <Link to="/">
          <h2 className="font-semibold uppercase tracking-widest text-lg hover:text-cyan-400 duration-300">
            React Shopping
          </h2>
        </Link>
        <div className="flex gap-5 items-center">
          <NavLink
            end
            to="/"
            className="text-gray-400 hover:text-gray-50 duration-300"
            style={isNavActiveStyles}
          >
            Home
          </NavLink>
          <NavLink
            to="shop"
            className="text-gray-400 hover:text-gray-50 duration-300"
            style={isNavActiveStyles}
          >
            Shop
          </NavLink>
          <Link to="cart" className="relative group">
            <span>
              <BsCart3 />
            </span>
            <span className="absolute -top-4 -right-4 h-6 w-6 bg-rose-500 rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-cyan-500 duration-300">
              {cartTotalQuantity}
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
