import React from "react";
import { FaDiscord, FaInstagram,FaFacebookF,FaTwitter,FaPinterestP } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiDribbble } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import SiteLogo from "./SiteLogo";
import FooterLogo from "./FooterLogo";
import CuracaoGaming from "./CuracaoGaming";

export const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-payment">
            <h3>Trusted Payment Gateways</h3>
            <div className="payment-gateway-section">
              <NavLink>
                <img
                  src="https://lotus365.plus/wp-content/uploads/2023/06/Artboard-3.webp"
                  className="footer-payment--img"
                />
              </NavLink>
              <NavLink>
                <img
                  src="https://lotus365.plus/wp-content/uploads/2023/06/Artboard-1-2-1.webp"
                  className="footer-payment--img"
                />
              </NavLink>
              <NavLink>
                <img
                  src="https://lotus365.plus/wp-content/uploads/2023/06/Artboard-2.webp"
                  className="footer-payment--img"
                />
              </NavLink>
              <NavLink>
                <img
                  src="https://lotus365.plus/wp-content/uploads/2023/06/Artboard-4.webp"
                  className="footer-payment--img"
                />
              </NavLink>
            </div>
          </div>

          <div className="grid-four-column grid-footer">
            <div className="footer-about">
            <FooterLogo/>
              <p>
                Lotus365.Plus is an online gaming platform accredited by the
                Parliament of India, ensuring the security and reliability of
                our website for all players. You are invited to join us for
                online gaming. Our accreditation ensures your peace of mind
                while experiencing the thrill of the game.
              </p>
            </div>
            <div className="footer-social">
              <div>
              <CuracaoGaming />
                <div className="footer-social--icons grid-five--column">
                    <FaFacebookF className="icons" />
                    <FaTwitter className="icons" />
                    <FaInstagram className="icons" />
                    <FiDribbble className="icons" />
                    <FaPinterestP className="icons" />
                </div>
              </div>
            </div>
            <div className="footer-explore">
              <h5>Explore Site366</h5>
              <NavLink to="" className="footer-explore--link">
                About Us
              </NavLink>
              <NavLink to="" className="footer-explore--link">
                Terms and Condition
              </NavLink>
              <NavLink to="" className="footer-explore--link">
                Privacy Policy
              </NavLink>
              <NavLink to="" className="footer-explore--link">
                Disclaimer Us
              </NavLink>
              <NavLink to="" className="footer-explore--link">
                Contact Us
              </NavLink>
            </div>
            <div className="footer-discover">
              <h5>Discover More</h5>
              <NavLink to="" className="footer-explore--link">
                Cricket Betting Tips
              </NavLink>
              <NavLink to="" className="footer-explore--link">
                Sports Betting Tips
              </NavLink>
              <NavLink to="" className="footer-explore--link">
                Blogs
              </NavLink>
            </div>
          </div>
          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>Copyright {new Date().getFullYear()} © Lotus365.plus</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
