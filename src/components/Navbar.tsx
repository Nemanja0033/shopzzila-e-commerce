import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../utils/ThemeToggler";
import CartCounter from "../pages/Cart/components/CartCounter";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 600 && window.innerWidth >= 768) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`w-full shadow-sm h-16 bg-base-100 flex lg:justify-evenly justify-between transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 z-50' : ''}`}
    >
      <img
        onClick={handleLogoClick}
        className="mb-2 cursor-pointer"
        src="https://i.postimg.cc/zBcYzVPW/logo-1.png"
        alt="shopzzila-logo"
      />

      <div className="hidden md:flex justify-around w-1/2 items-center gap-4">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/products" className="hover:text-primary">Products</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link className="flex gap-2" to="/cart">
          <ShoppingBag className="hover:text-primary" />
          <CartCounter />
        </Link>
        <ThemeToggler />
      </div>

      <div className="flex items-center">
      <Link className="flex md:hidden" to="/cart">
          <ShoppingBag className=" hover:text-primary" />
          <CartCounter />
      </Link>

      <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center mx-5">
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600"></span>
      </button>

      </div>

      
      {isOpen && (
        <div
          id="sm-nav"
          className="md:hidden bg-base-100 flex flex-col items-center justify-evenly text-4xl absolute h-full z-10 top-16 left-0 right-0"
        >
          <Link onClick={closeNav} to="/" className="hover:text-primary">Home</Link>
          <Link onClick={closeNav} to="/products" className="hover:text-primary">Products</Link>
          <Link onClick={closeNav} to="/about" className="hover:text-primary">About</Link>
          <Link onClick={closeNav} to='/cart'>Cart</Link>
          <ThemeToggler />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
