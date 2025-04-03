import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-pink-200 border-b border-pink-300">
      <div className="text-2xl font-bold text-pink-800">The Plushy Place</div>
      <nav className="flex gap-4">
        <Link href="/" className="text-pink-600 hover:text-pink-800 text-lg">
          Home
        </Link>
        <Link
          href="/contact"
          className="text-pink-600 hover:text-pink-800 text-lg"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
