

import { Col, Container, Row} from "react-bootstrap";
import Header from "../../layout/header/header";
// import Mogule1 from "../../assets/images/01-PlayEstates-Key-Mogul.png";
import { FaTwitter, FaTelegramPlane, FaRedditAlien, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export function ComingSoon() {
  return (
    <div className="ComingSoon">    
      <Header/>
      <Container fluid className="mt-5">
          <Row className="mt-5 justify-content-center">
              <Col lg="6" md="6" sm="12" className="text-center mt-5">
                <h4 className="text-white">COMING SOON</h4>
                <h2 className="sec-title">Follow for news and updates</h2>
                <p class="sec-description">Follow us on social media to stay up to speed on all of our upcoming announcements. Supply of our Membership Tokens is limited and first-come-first-served.</p>
                <div className="col-md-5 d-flex justify-content-around align-items-center m-auto">
                    <a className="social-link" href="https://twitter.com/playestates"><FaTwitter /></a>
                    <a className="social-link" href=" https://t.me/playestates"><FaTelegramPlane /></a>
                    <a className="social-link" href="https://reddit.com/u/PlayEstates"><FaRedditAlien/></a>
                    <a className="social-link" href="https://reddit.com/u/PlayEstates"><FaYoutube/></a>
                    <a className="social-link" href="https://www.linkedin.com/company/playestates"><FaLinkedinIn/></a>
                </div>
              </Col>
          </Row>
      </Container>
    </div>
  );
}
