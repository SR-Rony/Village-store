'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(2);
  const [search, setSearch] = useState('');
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Product', href: '/product' },
    { name: 'About', href: '/about' },
    { name: 'Collection', href: '/collection' },
    { name: 'Blog', href: '/blog' },
  ];

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${encodeURIComponent(search)}`);
      setSearch('');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          🛍️ <span>Village Store</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition relative after:block after:h-[2px] after:bg-primary after:transition-transform after:origin-left font-bold
                  ${isActive ? 'text-primary after:scale-x-100' : 'text-gray-700 hover:text-primary after:scale-x-0 hover:after:scale-x-100'}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Search - Desktop Only */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center border rounded-md px-3 py-1">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none w-40"
          />
          <button type="submit" className="text-gray-500 hover:text-black">
            <BiSearch size={20} />
          </button>
        </form>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Link href="/profile">
            <FiUser className="text-gray-700 hover:text-black cursor-pointer" size={22} />
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-gray-700 hover:text-black" size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={toggleMobile}>
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.name}
              </Link>
            ))}
          </nav>
          <form onSubmit={handleSearch} className="mt-3 flex border rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full"
            />
            <button type="submit" className="text-gray-500 hover:text-black">
              <BiSearch size={20} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;