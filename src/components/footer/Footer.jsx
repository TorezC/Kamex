import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="contact-title">
                <h4>Contact Us</h4>
              </div>
              <ul class="contact-link">
                <li>
                  <a href="tel:+2348104025253">+2348104025253</a>
                </li>
                <li>
                  <a href="mailto:victorytorez@gmail.com">info@kamexgroup.com</a>
                </li>
                <li>
                  <a href="/">90 Circular Road Freetown, Sierra Leone</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="contact-title">
                <h4>About Us</h4>
              </div>
              <ul class="contact-link">
                <li>
                  <NavLink to='/about-us'>Who we are</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6">
                        <div class="footer-content">
                            <p>Copyright © 2023</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="footer-social text-right">
                            <a href="/#"> <i class="fab fa-facebook-f"></i></a>
                            <a href="/#"><i class="fab fa-twitter"></i></a>
                            <a href="/#"><i class="fab fa-google"></i></a>
                            <a href="/#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
