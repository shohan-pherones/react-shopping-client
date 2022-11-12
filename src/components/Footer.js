import { Link, NavLink } from "react-router-dom";

const Footer = ({ isNavActiveStyles }) => {
  return (
    <footer className="bg-gray-700 text-gray-500 py-10 flex flex-col justify-center items-center gap-5">
      <div className="flex gap-5">
        <NavLink
          end
          to="/"
          className="hover:text-gray-50 duration-300"
          style={isNavActiveStyles}
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          className="hover:text-gray-50 duration-300"
          style={isNavActiveStyles}
        >
          Shop
        </NavLink>
      </div>
      <p className="text-center">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <Link to="/" className="hover:text-cyan-400 duration-300">
          React Shopping.
        </Link>{" "}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
