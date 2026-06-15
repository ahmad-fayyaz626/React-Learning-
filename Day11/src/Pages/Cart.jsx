import Wrapper from "../Components/Wrapper";
// this cart page will show the items added to the cart their name quantity and price and also the total price of the cart.
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <Wrapper>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
             
              
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>1</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-error btn-sm">Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>  
        <div className="text-right mt-4">
          <span className="text-lg font-bold">
            Total: $
            {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cart;  