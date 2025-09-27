import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        Product Store
      </Link>
      <Link to="/cart" className="relative">
        <FaCartShopping size={30} />
        <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
          {cartCount}
        </span>
      </Link>
    </nav>
  );
}
