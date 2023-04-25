import { NavLink } from "react-router-dom";
import kamex from "../../assets/kamex.jpeg";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section class="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="contact-title">
                <img
                  src={kamex}
                  alt="logo"
                  width={100}
                  height={100}
                  className="img-fluid"
                />
              </div>
              <ul class="contact-link mt-2 p-0">
                <li className="footer-social text-right">
                  <a href="/#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="/#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="/#">
                    <i class="fab fa-google"></i>
                  </a>
                  <a href="/#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <ul class="contact-link p-0 mt-3">
                <li>
                  <p className="footer-content">Copyright © Kamex Group 2023</p>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="contact-title">
                <h4>Company</h4>
              </div>
              <ul class="contact-link p-0">
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/">Team</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="contact-title">
                <h4>Products</h4>
              </div>
              <ul class="contact-link p-0">
                <li>
                  <NavLink to="/water">Water</NavLink>
                </li>
                <li>
                  <NavLink to="/fisheries">Fisheries</NavLink>
                </li>
                <li>
                  <NavLink to="/mining">Mining</NavLink>
                </li>
                <li>
                  <NavLink to="/construction">Construction</NavLink>
                </li>
                <li>
                  <NavLink to="/oilandgas">Petroleum</NavLink>
                </li>
                <li>
                  <NavLink to="/agriculture">Agriculture</NavLink>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="contact-title">
                <h4>Contact Us</h4>
              </div>
              <ul class="contact-link p-0">
                <li>
                  <a href="tel:+2348104025253">+2348104025253</a>
                </li>
                <li>
                  <a href="mailto:victorytorez@gmail.com">
                    info@kamexgroup.com
                  </a>
                </li>
                <li>
                  <a href="/">90 Circular Road Freetown, Sierra Leone</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
