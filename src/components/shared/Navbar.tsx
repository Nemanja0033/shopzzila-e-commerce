import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../ui/ThemeToggler";
import CartLink from "../reusables/CartLink";
import { logoUrl } from "../../utils/constants";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <nav ref={navRef} className={`w-full h-[80px] bg-base-100 shadow-md flex justify-between items-center md:px-12 px-2 ${isSticky ? 'fixed top-0 left-0 z-50' : ''}`}>
      <div>
        <Link to={'/'}>
            <img className="h-16" src={logoUrl} alt="logo" />
        </Link>
      </div>

      <div className="flex w-full gap-1 justify-end items-center">
          <Link to="/products" className="hover:text-primary mr-4">Products</Link>
          <CartLink />
          <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
