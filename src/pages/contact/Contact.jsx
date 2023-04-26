import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div>
        <Header/>
      <section class="contact-page-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="contact-page-title">
                <span>Contact With Us</span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5">
              <div class="contact-inform">
                <div class="information">
                  <i class="fas fa-map-marker-alt"></i>
                  <span></span>
                </div>
                <div class="information text-left">
                  <i class="fas fa-envelope-open"></i>
                  <div class="row">
                    <a href="mailto:info@kamexgroup-ltd.com">
                    info@kamexgroup-ltd.com
                    </a>
                  </div>
                </div>
                <div class="information">
                  <i class="fas fa-phone"></i>
                  <div class="">
                    <a href="tel:+0236523653265">+02 365 2365 3265 (05)</a>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
