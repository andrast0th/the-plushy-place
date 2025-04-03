import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-pink-500 text-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">The Plushy Place</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/products" className="hover:underline">Products</a>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">About</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;