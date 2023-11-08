
import navbarData from '../assets/navbarData.json';
import '../styles/Contact.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
 
} from '@fortawesome/free-solid-svg-icons';


function HomeContact() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, e.g., sending the data to the server
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleContactSubmit} className="contact-form-fill">
          
          <input type="text" id="name" name="name" required placeholder="Name"/>

          
          <input type="tel" id="phone" name="phone" required placeholder="Phone" />

          
          <input type="email" id="email" name="email" required placeholder="Email Address"/>

          
          <textarea id="message" name="message" required placeholder="Message" />

          <button id="c-button" type="submit">Contact Us</button>
        </form>
      </div>

      <div className="contact-links">
        <a href="tel:+254769749772">
        <FontAwesomeIcon icon={faPhone} /> Phone/WhatsApp/Text: {navbarData.Phone}
        </a>
        <a href="mailto:theebrooklynnairobi@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} /> {navbarData.Email}
        </a>
        <a href="https://www.instagram.com/thee_brooklyn_nairobi">
           Instagram: thee_brooklyn_nairobi
        </a>
        <a href="https://www.tiktok.com/@thee_brooklyn_nairobi">
           TikTok: @thee_brooklyn_nairobi
        </a>
      </div>
    </div>
  );
}

export default HomeContact;
