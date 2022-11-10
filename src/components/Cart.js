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
    <div className="cart-wrapper">
      <h2 className="section-title">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="if-cart-is-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <span>
                <BsArrowLeft />
              </span>
              <span>Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="if-cart-is-not-empty">
          <div className="headlines">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          <div className="cart-items-wrapper">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-item-left">
                  <div className="cart-item-img">
                    <img src={cartItem.image} alt={cartItem.name} />
                  </div>
                  <div className="cart-item-texts">
                    <p>{cartItem.name}</p>
                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-price">
                  <p>{currencyFormatter(cartItem.price)}</p>
                </div>

                <div className="cart-item-quantity">
                  <button onClick={() => handleDecreaseQuantity(cartItem)}>
                    -
                  </button>
                  <span>{cartItem.cartQuantity}</span>
                  <button onClick={() => handleIncreaseQunatity(cartItem)}>
                    +
                  </button>
                </div>

                <div className="cart-item-total-price">
                  <p>
                    {currencyFormatter(cartItem.price * cartItem.cartQuantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <button className="clear-cart-btn" onClick={handleClearCart}>
              Clear cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">
                  {currencyFormatter(cart.cartTotalAmount)}
                </span>
              </div>
              <p className="taxes-shipping">
                Taxes and shipping costs are calculated at the checkout
              </p>
              <button className="checkout-btn">Checkout</button>
              <div className="continue-shopping">
                <Link to="/">
                  <span>
                    <BsArrowLeft />
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
