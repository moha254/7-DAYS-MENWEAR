import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, X } from 'lucide-react';
import logo from '../../download (1).png';

export default function Header() {
  const { cartItems, removeFromCart } = useCart(); // Add removeFromCart from context
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [isCartOpen, setCartOpen] = useState(false); // State to track cart visibility

  const handleCheckout = () => {
    setCartOpen(!isCartOpen); // Toggle cart visibility
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="7 Days Menswear Logo" className="h-12 w-auto" />
          <span className="text-xl font-bold text-gray-800">7 Days Menswear</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
          <a href="#products" className="text-gray-600 hover:text-blue-600 transition">Collection</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          <div className="relative">
            <button
              onClick={handleCheckout}
              className="relative bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Checkout
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-64 p-4 z-50">
                <h3 className="font-semibold text-gray-800 mb-3">Cart Items</h3>
                {cartItems.length > 0 ? (
                  <ul className="space-y-2">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex justify-between items-center">
                        <span className="text-gray-600">{item.title} x {item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Remove ${item.title} from cart`}
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800 transition"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">Your cart is empty.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
