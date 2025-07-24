// components/Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-[#18181B] text-white w-full pt-10 pb-6 px-4 mt-16">
    <div className="w-full p-10 mx-auto flex flex-col md:flex-row md:justify-between items-center gap-8">
      {/* Logo & Tagline */}
      <div className="flex items-center flex-col md:flex-row gap-4">
        <span className="font-bold text-lg tracking-wide text-red-600">
          bo<span className="text-white">At</span>
        </span>
        <span className="text-sm text-gray-400 md:ml-4 font-[Inter]">
          Plug Into Nirvana.
        </span>
      </div>

      {/* Links */}
      <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
        <div>
          <h4 className="font-semibold mb-2 text-red-500 uppercase text-xs">Products</h4>
          <ul className="space-y-1">
            <li><Link to="/products" className="hover:text-red-400">All Products</Link></li>
            <li><Link to="/cart" className="hover:text-red-400">Cart</Link></li>
            <li><Link to="/about" className="hover:text-red-400">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-red-500 uppercase text-xs">Support</h4>
          <ul className="space-y-1">
            <li><a href="mailto:support@boat.com" className="hover:text-red-400">Email Support</a></li>
            <li><a href="https://twitter.com/boatsupport1" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Twitter</a></li>
            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-red-500 uppercase text-xs">Community</h4>
          <ul className="space-y-1">
            <li><a href="https://www.instagram.com/boat.nirvana/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Instagram</a></li>
            <li><a href="https://www.facebook.com/boat.nirvana/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/boat-lifestyle/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-2">
      <span>&copy; {new Date().getFullYear()} boAt. All rights reserved.</span>
      <span>
        Made with <span className="text-red-400">♥</span> for music lovers.
      </span>
    </div>
  </footer>
);

export default Footer;
