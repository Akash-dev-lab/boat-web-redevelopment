// context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // each item: {id, name, price, image, description, quantity}
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load on mount
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart") || "[]");
        const normalized = stored.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));
        setCartItems(normalized);
    }, []);

    // Persist on change
    useEffect(() => {
        if (cartItems.length) {
            localStorage.setItem("cart", JSON.stringify(cartItems));
        } else {
            localStorage.removeItem("cart");
        }
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prev) => {
            const found = prev.find((p) => p.id === product.id);
            if (found) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            } else
                return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) =>
        setCartItems((prev) => prev.filter((p) => p.id !== id));

    const clearCart = () => setCartItems([]);
    const toggleCart = () => setIsCartOpen((o) => !o);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                isCartOpen,
                toggleCart,
                setCartItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
