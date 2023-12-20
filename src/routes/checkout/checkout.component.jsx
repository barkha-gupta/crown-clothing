import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <table>
        <td>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </td>

        {cartItems.map((item) => (
          <tr>
            <td>{item.name} </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Checkout;
