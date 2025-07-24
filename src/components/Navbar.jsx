import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingDock } from "./magicui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
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
                <IconTerminal2 className="h-full w-full hover:dark:text-red-600" />
            ),
            href: "/products",
        },
        {
            title: "Carts",
            icon: (
                <IconNewSection className="h-full w-full hover:dark:text-red-600" />),
            href: "/cart",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];

    return (
        <header className="fixed w-[90%] top-12 rounded-lg z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="sm:text-4xl font-bold font-[Inter] text-red-600 tracking-tight">
                    bo<span className="text-white sm:text-4xl">At</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden max-md:block max-sm:block md:flex gap-8 text-white font-[Inter] font-bold">

                    <FloatingDock desktopClassName={'bg-transparent'}
                        // mobileClassName="translate-y-0" // only for demo, remove for production
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
