import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQty } from "../redux/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  //Calculating Total Price 
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItems.length === 0)
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
      </div>
    );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center border p-4 rounded shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain mr-4"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
              <div className="mt-2 flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    dispatch(
                      updateQty({ id: item.id, qty: Math.max(1, item.qty - 1) })
                    )
                  }
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))
                  }
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="ml-4 text-red-500 font-bold"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
