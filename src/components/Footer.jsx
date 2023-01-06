import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    //  Footer Section
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="/">How it works</a> <a href="/">Testimonials</a>
            <a href="/">Investments</a> <a href="/">Terms of Service</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/Contact">Contact</Link> <a href="/">Support</a>
            <a href="/">Destinations</a> <a href="/">Sponsorships</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
            <a href="/">Agency</a> <a href="/">Influencer</a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media </h2>
            <a href="https://www.instagram.com/">Instagram</a>{" "}
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>{" "}
            <a href="https://www.twitter.com/">Twitter</a>
          </div>
        </div>
      </div>

      {/* Wrapped Social links, copyright, and logo for the footer */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a href="/" id="footer-logo">
              <i className="fa-brands fa-teamspeak"></i>NGT
            </a>
          </div>
          <p className="web-rights">© NGT 2022. All rights reserved</p>
          <div className="socials">
            <a
              className="social-icon-link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="social-icon-link"
              href="https://wwww.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon-link"
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="social-icon-link"
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;
