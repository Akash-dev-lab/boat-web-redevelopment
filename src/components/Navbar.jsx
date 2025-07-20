import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-[90%] top-6 rounded-lg z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                    <Link to="/" className="sm:text-4xl font-bold font-[Inter] text-red-600 tracking-tight">
                        bo<span className="text-white sm:text-4xl">At</span>
                    </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-white font-[Inter] font-bold">
                    
                    <Link className='hover:text-[#e0531f]' to="/">Home</Link>
                    <Link className='hover:text-[#e0531f]' to="/products">Products</Link>
                    <Link className='hover:text-[#e0531f]' to="/about">About</Link>
                    <Link className='hover:text-[#e0531f]' to="/contact">Contact</Link>
                </nav>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/10 bg-opacity-90 px-4 pt-4 pb-6 space-y-4 text-white font-medium">
                    <div className="hover:text-[#e0531f] transition-all cursor-pointer">
                        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    </div>

                    <div className="hover:text-[#e0531f] transition-all cursor-pointer">
                        <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
                    </div>

                    <div className="hover:text-[#e0531f] transition-all cursor-pointer">
                        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    </div>

                    <div className="hover:text-[#e0531f] transition-all cursor-pointer">
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>

                </div>
            )}
        </header>
    );
};

export default Navbar;
