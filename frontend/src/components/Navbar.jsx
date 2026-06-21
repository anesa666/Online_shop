import { useState } from "react";
import { FaBars } from "react-icons/fa6";


function Navbar(){

  const[isOpen, setIsOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  };

  return (
    <>
    <header>
      <div className="container">
      <nav>
        <div className="logo">
        <h2>
      STORE NAME
      </h2>
      </div>
      <ul className={isOpen ? "nav-link active" : "nav-link"}>
        <li><a href="/home" className="active">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="icon" onClick={toggleMenu}>
        <FaBars />
      </div>
      </nav>
    </div>
    </header>
    </>
  )
}

export default Navbar;