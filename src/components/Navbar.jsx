import { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { FloatingDock } from "./magicui/floating-dock";
import boAtLogo from "../assets/NewArrival-vedios/boat-logo.png";
import {
    IconBrandProducthunt,
    IconBrandX,
    IconHome,
} from "@tabler/icons-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full hover:dark:text-red-600" />
            ),
            href: "/",
        },

        {
            title: "Products",
            icon: (
                <IconBrandProducthunt className="h-full w-full hover:dark:text-red-600" />
            ),
            href: "/products",
        },
        {
            title: "Cart",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 h-full w-full hover:dark:text-red-600">
                    <path fillRule="evenodd" d="M5 4a3 3 0 0 1 6 0v1h.643a1.5 1.5 0 0 1 1.492 1.35l.7 7A1.5 1.5 0 0 1 12.342 15H3.657a1.5 1.5 0 0 1-1.492-1.65l.7-7A1.5 1.5 0 0 1 4.357 5H5V4Zm4.5 0v1h-3V4a1.5 1.5 0 0 1 3 0Zm-3 3.75a.75.75 0 0 0-1.5 0v1a3 3 0 1 0 6 0v-1a.75.75 0 0 0-1.5 0v1a1.5 1.5 0 1 1-3 0v-1Z" clipRule="evenodd" />
                </svg>),

            href: "/cart",
        },
        {
            title: "About",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full hover:dark:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
            ),
            href: "/about",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/boatsupport1?lang=en",
            rel: "noopener noreferrer",
            target: "_blank",
        },
        {
            title: "Login",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full hover:dark:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-line-cap="round" stroke-line-join="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
            ),
            href: "/login",
        }
    ];

    return (
        <header className="fixed w-[90%] top-12 rounded-lg z-50 backdrop-blur-xl border-b border-b-white/10 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="sm:text-4xl font-bold font-[Inter] text-red-600 tracking-tight">
                    bo<span className="text-white sm:text-4xl">At</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden max-md:block max-sm:block md:flex gap-8 text-white font-[Inter] font-bold">

                    <FloatingDock desktopClassName={'bg-transparent'}
                        items={links}
                    />
                </nav>

                {isOpen && (
                    <div className='w-full'>
                        <FloatingDock items={links} />
                    </div>
                )}
            </div>

            {/* Mobile Drawer Menu */}

        </header>
    );
};

export default Navbar;