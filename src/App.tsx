import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import { products } from './data/products';
import {
  Shirt,
  Award,
  Truck,
  Facebook,
  Instagram,
  MessageCircle,
  Heart,
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa'; // TikTok icon from react-icons

function App() {
  return (
    <CartProvider>
      <div className="bg-light-yellow min-h-screen">
        <Header />

        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Elevate Your Style
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Premium menswear for the modern gentleman. Quality craftsmanship,
              timeless designs.
            </p>
            <button
              onClick={() =>
                document.getElementById('products')?.scrollIntoView()
              }
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Shop Collection
            </button>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Collection
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.values(products)
                .flatMap(category => category.items)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shirt className="h-8 w-8" />,
                  title: 'Premium Quality',
                  description: 'Finest materials and expert craftsmanship',
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: 'Certified Products',
                  description: 'International quality certifications',
                },
                {
                  icon: <Truck className="h-8 w-8" />,
                  title: 'Fast Delivery',
                  description: 'Quick and secure worldwide shipping',
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form / Checkout */}
        <ContactForm />

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand Introduction */}
              <div className="text-center md:text-left">
                <h4 className="text-white font-bold text-xl mb-4">About Us</h4>
                <p className="text-sm text-gray-400">
                  Discover the essence of timeless style. At 7 Days Menswear,
                  we craft premium menswear for the modern gentleman, blending
                  quality materials with expert craftsmanship to create designs
                  that inspire confidence and sophistication.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-blue-500 transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="hover:text-blue-500 transition"
                    >
                      Collection
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-blue-500 transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-500 transition">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    <FaTiktok size={24} />
                  </a>
                  <a href="#" className="hover:text-blue-500 transition">
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-sm">© 2024 7 Days Menswear. All rights reserved.</p>
              <p className="text-sm mt-2 text-gray-400 flex items-center justify-center">
                Made by MORA TECH <Heart className="h-4 w-4 ml-1 text-red-500 fill-current" />
              </p>
            </div>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;
