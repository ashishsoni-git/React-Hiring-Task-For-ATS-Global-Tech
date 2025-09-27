import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded shadow flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-2"/>
      <h3 className="font-bold text-sm text-center">{product.title}</h3>
      <p className="text-gray-500 text-xs">{product.category}</p>
      <p className="font-semibold mt-1">${product.price}</p>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
