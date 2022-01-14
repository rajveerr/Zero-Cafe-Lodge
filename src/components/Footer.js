import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-zero-cafe-lodge.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-background-black has-text-white-ter">
          Got a Question? Call Us +91 77373 89887
        </div>
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Zero Cafe and Lodge"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered">
          <div className="container">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <h3>Zero</h3>
                <p>
                Overlooking the beautiful sight of Aravali hills, away from the chaos of Jaipur city yet in close proximity from ‘The Amer Fort’, glancing into the heritage and culture of Royal Rajputana. Zero is a luxurious lodge that graciously combines the glorious history with modern lifestyle. Glittering with the glass work influenced from royal Sheesh Mahals, gracefully embodying the beautiful swimming pool, waterfall and rooftop surrounded by the greenery makes for an exclusive event venue and bespoke residence.
                </p>
              </div>
              <div className="column is-4">
              <h3>Contact</h3>
                <p>
                  +91 77373 89887
                </p>
                <p>
                  info@zerocafelodge.com
                </p>
                <p>
                Zero Cafe &amp; Lodge,<br />
                Nahargarh Biological Park,<br />
                Delhi Highway, Jaipur, India<br />

                </p>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
