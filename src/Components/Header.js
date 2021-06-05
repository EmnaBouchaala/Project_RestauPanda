import { Link } from "react-router-dom";
const linkStyle = {
  textDecoration: "none",
  color: "white",
};
const Header = () => {
  return (
    <div class="container">
      <div className="placeholder">
        <div
          class="parallax-window"
          data-parallax="scroll"
          data-image-src="../Panda-Express.jpg"
        >
          <div class="tm-header">
            <div class="row tm-header-inner">
              <div class="col-md-6 col-12">
                <img src="../logop.png" alt="Logo" class="tm-site-logo" />
                <div class="tm-site-text-box">
                  <h1 class="tm-site-title">Express Panda Food </h1>
                  <h6 class="tm-site-description">Our restaurant menu </h6>
                </div>
              </div>
              <nav class="col-md-6 col-12 tm-nav">
                <ul class="tm-nav-ul">
                  <li class="tm-nav-li">
                    <Link style={linkStyle} to="/">
                      {" "}
                      <h1> Menu </h1>
                    </Link>
                  </li>
                  <li class="tm-nav-li">
                    <Link style={linkStyle} to="/Command">
                      {" "}
                      <h1> Command </h1>
                    </Link>
                  </li>
                  <li class="tm-nav-li">
                    <Link style={linkStyle} to="/about">
                      {" "}
                      <h1> About </h1>
                    </Link>
                  </li>
                  <li class="tm-nav-li">
                    <Link style={linkStyle} to="/Contact">
                      {" "}
                      <h1> Contact </h1>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
