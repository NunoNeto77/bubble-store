import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "../ShoppingCart/Cart.css";

type ShoppingCartItemProps = {
  name: string;
  quantity: number;
  totalPrice: number;
  price: number;
  id: number;
};

const ShoppingCartItem = ({
  name,
  quantity,
  totalPrice,
  price,
  id,
}: ShoppingCartItemProps) => {
  const dispatch = useDispatch();

  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };

  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  console.log(name);

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>€{price}</p>
      <p>x{quantity}</p>
      <article>Total €{totalPrice}</article>
      <button className="cart-actions" onClick={decrementCartItems}>
        -
      </button>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
    </div>
  );
};

export default ShoppingCartItem;
