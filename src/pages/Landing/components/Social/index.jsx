import React from "react";
import { Container } from "react-bootstrap";
import "./index.scss";
import { FaTwitter, FaTelegramPlane, FaRedditAlien, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  return (
    <Container className="d-flex justify-content-center">
      <div className="social-section">
        <div className="row">
          <div className="col-md-7">
            <h2>Let's Get Social!</h2>
            <p>
              Follow us on social media to stay up to speed on all of our
              upcoming announcements. Supply of our Membership Tokens is limited
              and first-come-first-served.
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-around align-items-center">
            <a className="social-link" href="https://twitter.com/playestates"><FaTwitter /></a>
            <a className="social-link" href=" https://t.me/playestates"><FaTelegramPlane /></a>
            <a className="social-link" href="https://reddit.com/u/PlayEstates"><FaRedditAlien/></a>
            <a className="social-link" href="https://reddit.com/u/PlayEstates"><FaYoutube/></a>
            <a className="social-link" href="https://www.linkedin.com/company/playestates"><FaLinkedinIn/></a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Social;
