import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import navbarData from '../assets/navbarData.json';
import {  FaMapMarker,  FaClock } from 'react-icons/fa';


function Footer() {
  function renderWorkingHours() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5) { // Monday to Friday
      if (hours >= 8 && hours < 17) {
        return 'Open';
      } else if (hours === 17 && minutes === 0) {
        return 'Open';
      } else {
        return 'Closed';
      }
    } else {
      return 'Closed';
    }
  }
  


  return (
    <footer data-aos="fade-up" data-aos-duration="1000"  className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>{navbarData.about}</p>
          <Link to="/about">READ MORE...</Link>
       
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/shop"> Shop</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/free-gifts">Free Gifts</Link>
          <Link to="/lipa-polepole">Lipa PolePole</Link>
          <Link to="/how-to-order">How To Order</Link>
          
          </ul>
        </div>
        <div className="footer-column">
          <h3>Location</h3>
          <p className="contact">

            
            <FaMapMarker />  {navbarData.Address} &nbsp;<br />
            Working Days: Mon - Fri<br />
            Working Hours: 8:00 AM - 5:00 PM <br />

            <FaClock /> &nbsp; {renderWorkingHours()}
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {navbarData.copywrite}</p>
      </div>
    </footer>
  );
}

export default Footer;
