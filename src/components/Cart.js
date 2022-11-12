import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/products/cartSlice";
import { useEffect } from "react";

const Cart = ({ currencyFormatter }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseQuantity = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseQunatity = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div className="cart-wrapper mt-20 container mx-auto">
      <h2 className="section-title uppercase text-center mb-10 text-3xl font-semibold tracking-widest">
        Shopping Cart
      </h2>
      {cart.cartItems.length === 0 ? (
        <div className="if-cart-is-empty flex flex-col justify-center items-center gap-3">
          <p className="text-2xl text-center">Your cart is currently empty</p>
          <div className="start-shopping">
            <Link
              to="/"
              className="flex items-center text-lg gap-2 text-cyan-500 group"
            >
              <span>
                <BsArrowLeft className="group-hover:-translate-x-2 duration-300" />
              </span>
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="if-cart-is-not-empty">
          <div className="headlines md:grid grid-cols-6 border-b uppercase tracking-widest text-sm font-medium pb-3 hidden">
            <p className="col-span-3">Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p className="justify-self-end">Total</p>
          </div>

          <div className="cart-items-wrapper flex flex-col gap-5 mt-5 px-5 md:px-0">
            {cart.cartItems?.map((cartItem) => (
              <div
                className="cart-item grid grid-cols-6 md:items-center border-b pb-3 grid-rows-2 md:grid-rows-none"
                key={cartItem.id}
              >
                <div className="cart-item-left col-span-4 md:col-span-3 flex gap-5 row-span-2 md:row-auto">
                  <div className="cart-item-img w-24 h-24 overflow-hidden">
                    <img src={cartItem.image} alt={cartItem.name} />
                  </div>
                  <div className="cart-item-texts">
                    <p>{cartItem.name}</p>
                    <button
                      onClick={() => handleRemoveFromCart(cartItem)}
                      className="text-gray-400 hover:text-rose-500 duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-price hidden md:block">
                  <p>{currencyFormatter(cartItem.price)}</p>
                </div>

                <div className="cart-item-quantity bg-gray-100 justify-self-start flex gap-5 px-3 py-2 text-lg border border-gray-300 hover:bg-gray-200 hover:border-gray-400 duration-300 self-start md:self-auto col-start-5 md:col-start-auto col-span-2 w-full md:col-span-1 md:w-auto justify-center md:justify-start">
                  <button onClick={() => handleDecreaseQuantity(cartItem)}>
                    -
                  </button>
                  <span>{cartItem.cartQuantity}</span>
                  <button onClick={() => handleIncreaseQunatity(cartItem)}>
                    +
                  </button>
                </div>

                <div className="cart-item-total-price md:justify-self-end font-medium row-start-2 col-start-5 md:row-start-auto md:col-start-auto col-span-2 md:col-span-1 text-center md:text-left">
                  <p>
                    {currencyFormatter(cartItem.price * cartItem.cartQuantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary mt-10 flex md:justify-between md:items-start flex-col-reverse md:flex-row items-center gap-10 md:gap-0 px-5 md:px-0">
            <button
              className="clear-cart-btn uppercase tracking-widest font-medium text-rose-500 bg-rose-50 px-5 py-3 border border-rose-500 duration-300 hover:bg-rose-500 hover:text-rose-50"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
            <div className="cart-checkout flex flex-col gap-3">
              <div className="subtotal flex justify-between text-2xl font-medium text-cyan-500">
                <span>Subtotal</span>
                <span className="amount">
                  {currencyFormatter(cart.cartTotalAmount)}
                </span>
              </div>
              <p className="taxes-shipping text-gray-400">
                Taxes and shipping costs are calculated at the checkout
              </p>
              <button className="checkout-btn bg-cyan-500 py-3 px-5 text-lg uppercase tracking-widest font-medium text-cyan-50 duration-300 hover:bg-gray-700 hover:text-gray-50">
                Checkout
              </button>
              <div className="continue-shopping">
                <Link
                  to="/"
                  className="flex items-center text-lg gap-2 text-cyan-500 group"
                >
                  <span>
                    <BsArrowLeft className="group-hover:-translate-x-2 duration-300" />
                  </span>
                  <span>Continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
