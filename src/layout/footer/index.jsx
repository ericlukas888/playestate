import React from "react";
import { Container } from "react-bootstrap";
import { FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <h2 className="text-white">2022<sup className="sup-text">TM</sup> PlayEstates. All rights reserved.</h2>
      <h4 className="footer-subtitle">Privacy Policy  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; Terms and Conditions  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;  Contact Us</h4>
      <div className="d-flex justify-center btn-group align-items-center">
        <a className="footer-social-link" href="https://twitter.com/playestates"><FaTwitter /></a>
        <a className="footer-social-link" href="https://discord.gg/4pfdez5Z6a"><FaDiscord/></a>
        <a className="footer-social-link" href="https://www.youtube.com/channel/UCzK1nobRnbD0zYa-9hL54Ig"><FaYoutube/></a>
      </div>
    </Container>
  );
};

export default Footer;
