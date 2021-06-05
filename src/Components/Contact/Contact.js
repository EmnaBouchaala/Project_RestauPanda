import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h2 class="col-12 text-center tm-section-title">Contact Page</h2>

      <div class="tm-container-inner-2 tm-contact-section">
        <div class="row">
          <div class="col-md-6">
            <img
              src="../../imagerestau.jpg"
              alt=""
              class="img-fluid tm-history-img"
            />
          </div>
          <div class="col-md-6">
            <div class="tm-address-box">
              <h4 class="tm-info-title tm-text-success">Our Address</h4>
              <address>Sfax , Tunisia , Panda street , 3041 BP</address>
              <i class="fas fa-phone tm-contact-icon"></i>tel:+216-28-593-171
              <a href="emnabouchaala0719@gmail.com" class="tm-contact-link">
                <i class="fas fa-envelope tm-contact-icon"></i>
                PandaExpress@gmail.com
              </a>
              <div class="tm-contact-social">
                <a
                  href="https://www.facebook.com/emna.bouchaala.44/"
                  class="tm-social-link"
                >
                  <i class="fab fa-facebook tm-social-icon"></i>
                </a>
                <a href="https://twitter.com/explore" class="tm-social-link">
                  <i class="fab fa-twitter tm-social-icon"></i>
                </a>
                <a
                  href="https://www.instagram.com/emnaa_bch/?hl=fr"
                  class="tm-social-link"
                >
                  <i class="fab fa-instagram tm-social-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
