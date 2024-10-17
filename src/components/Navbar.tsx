import gsap from "gsap";
import { ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navRef = useRef<HTMLDivElement | null>(null);

  const handleLogoClick = () => {
    window.location.href = '/'
  }

  useEffect(() => {
    if(navRef.current){
      gsap.from(navRef.current, {opacity: 0.5, y: 1000})
      gsap.to(navRef.current, {opacity: 1, delay: 0.3})
    }
  })

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false)
  }

  return (
    <nav className="w-full bg-white h-16 flex  lg:justify-evenly justify-between ">
      
      <img onClick={handleLogoClick} className="mb-2 cursor-pointer" src="public/logo.png" alt="shopzzila-logo" />
    
      <div className="hidden md:flex justify-around w-1/2 items-center text-gray-600 gap-4">
        <Link to="/" className="hover:text-primary">Home </Link>
        <Link to="/products" className="hover:text-primary">Products </Link>
        <Link to="/about" className="hover:text-primary">About </Link>
        <Link to='/cart'><ShoppingBag  className="text-gray-600 hover:text-primary"/></Link>
      </div>

      <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center mx-5">
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600"></span>
      </button>

      {isOpen && (
        <div ref={navRef} className="md:hidden flex flex-col items-center justify-evenly text-gray-600  text-4xl absolute h-full  z-10 top-16 left-0 right-0 bg-white">
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
