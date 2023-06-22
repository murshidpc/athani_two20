import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="footer-logo-socials">
          <Link className="footer-logo" to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo-white.png"}
              alt="footer-log"
              color="white"
              width="400px"
              height="400px"
            />
          </Link>
          <div className="social-icons">
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/two20.in/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
          </div>
        </div>
        <div className="footer-links">
          <div class="footer-link-items">
            <h2>Navigation</h2>
            <Link to="/">Home</Link>
            <Link to="/">About us</Link>
            <Link to="/">Gallery</Link>
            <Link to="/">Well Wishers</Link>
            <Link to="/">Contact Us</Link>
          </div>
        </div>
        <div className="footer-contact-us">
          <h2>Contact Us</h2>
          <div className="address">
            <p>ATHANI</p>
            <p>Near Indian Oil Petrol Pump</p>
            <p>Parannur (Po) Narikkuni , 673585</p>
            <p>Calicut</p>
            <br />
            <p>+91 9605333664</p>
          </div>
        </div>
      </div>
    </div>
  );
}
