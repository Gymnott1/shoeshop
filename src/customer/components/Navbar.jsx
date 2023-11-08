import  { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faList, faMoneyCheck, faShoppingBag, faMoneyBill1Wave, faTags, faShoppingCart, faUser, faBars, faTimes, faGift, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'; // Add the faBars and faTimes icons for menu toggle
import '../styles/Navbar.css';
import logoLight from '../assets/logo-light.svg'; // Import the light mode logo
import logoDark from '../assets/logo-dark.svg'; // Import the dark mode logo
import { motion} from "framer-motion" 
import { Link } from 'react-router-dom';
import navbarData from '../assets/navbarData.json';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };
  useEffect(() => {
    // Add or remove the 'dark-mode' class based on the state
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img 
          loading="lazy"
          src={isDarkMode ?  logoDark : logoLight } alt="LOGO" />
          <span 
          
          className='logo-name'>{navbarData.name}</span>
        </div>
        
        <motion.div
          className={`menu-items ${menuOpen ? 'open' : ''}`}
          initial={{ x: -50, opacity: 0 }} // Initial state (off-screen and invisible)
          animate={{ x: 0, opacity: 1}} // Animation state (on-screen and visible)
          exit={{ x: -50, opacity: 0 }} // Exit state (off-screen and invisible)
        >
          <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
          <Link to="/categories"><FontAwesomeIcon icon={faList}/> Categories</Link>
          <Link to="/shop"><FontAwesomeIcon icon={faShoppingBag}/> Shop</Link>
          <Link to="/offers"><FontAwesomeIcon icon={faTags}/> Offers</Link>
          <Link to="/free-gifts"><FontAwesomeIcon icon={faGift}/> Free Gifts</Link>
          <Link to="/lipa-polepole"><FontAwesomeIcon icon={faMoneyBill1Wave}/> Lipa PolePole</Link>
          <Link to="/how-to-order"><FontAwesomeIcon icon={faMoneyCheck}/> How To Order</Link>
          <Link to="/about"> About</Link>
        </motion.div>
        <div className="user">
          <Link to="#"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          <Link to="/account"><FontAwesomeIcon icon={faUser} /></Link>
          <span onClick={toggleDarkMode} className={isDarkMode ? 'dark-light-mode-on' : 'dark-light-mode-off'}>
            <FontAwesomeIcon icon={isDarkMode ? faToggleOff : faToggleOn} />
          </span>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} /> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
