import gsap from "gsap";
import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductsCounter from "../pages/Cart/components/ProductCounter";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1000) {
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

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, { opacity: 0 });
      gsap.to(navRef.current, { opacity: 1, delay: 0.5 });
    }
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
      className={`w-full bg-white shadow-sm h-16 flex lg:justify-evenly justify-between transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 z-50' : ''}`}
    >
      <img
        onClick={handleLogoClick}
        className="mb-2 cursor-pointer"
        src="https://i.postimg.cc/zBcYzVPW/logo-1.png"
        alt="shopzzila-logo"
      />

      <div className="hidden md:flex justify-around w-1/2 items-center text-gray-600 gap-4">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/products" className="hover:text-primary">Products</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link className="flex" to="/cart">
          <ShoppingBag className="text-gray-600 hover:text-primary" />
          <ProductsCounter />
        </Link>
      </div>

      <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center mx-5">
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600"></span>
      </button>

      {isOpen && (
        <div
          className="md:hidden flex flex-col items-center justify-evenly text-gray-600 text-4xl absolute h-full z-10 top-16 left-0 right-0 bg-white"
        >
          <Link onClick={closeNav} to="/" className="hover:text-primary">Home</Link>
          <Link onClick={closeNav} to="/products" className="hover:text-primary">Products</Link>
          <Link onClick={closeNav} to="/about" className="hover:text-primary">About</Link>
          <Link onClick={closeNav} to='/cart'>Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
