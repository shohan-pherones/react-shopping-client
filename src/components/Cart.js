import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const currencyFormatter = (price) =>
    price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

  return (
    <section className="cart-container">
      <h2 className="section-title">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
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
        <div className="cart-display">
          <div className="titles">
            <p className="product-title">Product</p>
            <p className="price">Price</p>
            <p className="quantity">Quantity</p>
            <p className="total">Total</p>
          </div>

          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <div className="cart-product-img">
                    <img src={cartItem.image} alt={cartItem.name} />
                  </div>
                  <div className="cart-product-texts">
                    <p>{cartItem.name}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">
                  <p>{currencyFormatter(cartItem.price)}</p>
                </div>
                <div className="cart-product-quantity">
                  <button>-</button>
                  <span className="count">{cartItem.cartQuantity}</span>
                  <button>+</button>
                </div>
                <div className="cart-product-total-price">
                  <p>
                    {currencyFormatter(cartItem.price * cartItem.cartQuantity)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <button className="clear-cart">Clear cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">
                  {currencyFormatter(cart.cartTotalAmount)}
                </span>
              </div>
              <p className="optional-text">
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
    </section>
  );
};

export default Cart;
