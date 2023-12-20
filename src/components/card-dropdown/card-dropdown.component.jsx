import { useContext } from "react";
import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CardDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const toggleISCartOpen = () => {
    setIsCartOpen((pre) => !pre);
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout" onClick={toggleISCartOpen}>
        <Button>Go To Checkout</Button>
      </Link>
    </div>
  );
};

export default CardDropdown;
