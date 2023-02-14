import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <section className="short">
        <div className="grid grid-two-coloumn">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to={"/contact"}>Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="grid grid-four-coloumn">
          <div className="about">
            <h3>Clothing Store</h3>
            <p>
              Our Mission is to make a difference through our branding by
              staying ahead of the fashion trends, defining style and giving
              customers what they want.
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />

              <input type="submit" value="subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column ">
            <p>
              @{new Date().getFullYear()} This Clothing Store. All Rights
              Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
