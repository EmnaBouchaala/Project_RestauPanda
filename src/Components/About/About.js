import React from "react";
import "../../App.css";
import ReactPlayer from "react-player";

const About = () => {
  return (
    <div class="container">
      <h2 class="col-12 text-center tm-section-title">About Panda Express</h2>

      <div className="tm-container-inner tm-persons">
        <ReactPlayer
          className="react-player fixed-bottom"
          url="../../Food_video.mp4"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>

      <p class="col-12 text-center">
        Pandoush doing the right things since 1995 ° <br></br>
        you can appreciate a wide determination of pizzas, hamburger, drinks,
        pastas and sandwiches,
      </p>
      <div class="tm-container-inner tm-features">
        <div class="row">
          <div class="col-lg-4">
            <div class="tm-feature">
              <i class="fas fa-4x fa-pepper-hot tm-feature-icon"></i>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="tm-feature">
              <i class="fas fa-4x fa-seedling tm-feature-icon"></i>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="tm-feature">
              <i class="fas fa-4x fa-cocktail tm-feature-icon"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="tm-container-inner tm-featured-image">
        <div class="row">
          <div class="col-12">
            <div class="placeholder-2">
              <div
                class="parallax-window-2"
                data-parallax="scroll"
                data-image-src="img/about-05.jpg"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="tm-container-inner tm-history">
        <div class="row">
          <div class="col-12">
            <div class="tm-history-inner">
              <img
                src="../../imagerestau.jpg"
                alt=""
                class="img-fluid tm-history-img"
              />
              <div class="tm-history-text">
                <h4 class="tm-history-title">History of our restaurant</h4>
                <p class="tm-mb-p">
                  Everything began in 1995 when the proprietor opened his first
                  pizza , hamburger and sandwich shop. It was gigantically
                  fruitful and this driven him to begin another shop called
                  Panda Express. He opened the principal store in 1994 in Sfax
                  Tunisia. Today, ‘Panda Express’ can be found in 30 nations
                  worldwide in in excess of 10,000 areas. It has turned into the
                  world’s driving’ Coffee and Baked Goods chain, serving’ in
                  excess of 900 million pizzas and 1.5 some hamburger a year all
                  inclusive. Furthermore, presently it’s additionally in India.
                  At ‘Panda Express’ India, you can appreciate a wide
                  determination of pizzas, hamburger, drinks and sandwiches,
                  that will have you sipping’ and slurping and gorgin’ and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
