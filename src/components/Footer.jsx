import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Narkoodu</h3>
            <p>A premium coworking space in Chennai designed for startups, entrepreneurs, freelancers, remote professionals, and growing teams.</p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
            </div>
          </div>
          
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>
              <li><Link to="/plans">Membership Plans</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
          
          <div>
            <h3>Support</h3>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/book-tour">Book a Tour</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3>Contact Info</h3>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Sera+Towers,+W555%2B638,+3rd+St,+Shanthi+Nikethan+Colony,+Sudharsan+Nagar,+Madambakkam,+Chennai,+Tamil+Nadu+600073" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'var(--transition)' }}
                  onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'} 
                  onMouseOut={(e) => e.target.style.color = 'inherit'}
                >
                  <strong>Sera Towers</strong>, W555+638, 3rd St, Shanthi Nikethan Colony, Sudharsan Nagar, Madambakkam, Chennai, Tamil Nadu 600073
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={20} style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="tel:+917200253037">+91 7200253037</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={20} style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="mailto:admin@seraminds.com">admin@seraminds.com</a>
                  <a href="mailto:hr@seraminds.com">hr@seraminds.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Narkoodu Coworking Spaces. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
