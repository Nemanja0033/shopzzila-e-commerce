import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-transparent h-16 flex lg:justify-evenly justify-between">
      <img src="public/logo.png" alt="shopzzila-logo" />
    
      <div className="hidden md:flex justify-around w-1/2 items-center text-gray-600 gap-4">
        <Link to="/" className="hover:text-primary">Home </Link>
        <Link to="/" className="hover:text-primary">Products </Link>
        <Link to="/" className="hover:text-primary">About </Link>
      </div>

      <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center mx-5">
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600 mb-1"></span>
        <span className="block w-6 h-1 bg-gray-600"></span>
      </button>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center text-gray-600 gap-2 absolute top-16 left-0 right-0 bg-white">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/" className="hover:text-primary">Products</Link>
          <Link to="/" className="hover:text-primary">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
