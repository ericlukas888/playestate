
import Header from "../../layout/header/header";
import Footer from "../../layout/footer";
import Social from '../Landing/components/Social'
import { Container, Row, Col, Button } from "react-bootstrap";
import Mogule1 from "../../assets/images/01-PlayEstates-Key-Mogul.png";

export function Membership() {
  return (
    <>
      <Header />
      <Container fluid className="contentWrapper py-5 Membership">
        <Row>
            <h1 className="sec-title text-center">Membership Token Early Access</h1>
            <div className="f-flex justify-content align-items-center">
                {/* <Image src={}/> */}
            </div>
        </Row>  
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={11} lg={10} xl={9}>
            <Row
              id="membershipToken"
              className="pb-4 d-flex align-items-center justify-content-center"
            >
              <Col sm={12} lg={6} xl={6}>
                <img src={Mogule1} alt="" />
              </Col>
              <Col sm={12} lg={6} xl={6}>
                <div className="membership-section">
                  <h6 className="sec-title">Membership token</h6>
                  <p className="sec-description">
                    Lorem ipsum dolor sit amet, adipiscing elit. Vivamus id
                    pellentesque aliquet id feugiat. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <div className="collector-section">
                    <div className="btn-pagination-group">
                      <span className="text-white ml-2">QTY</span>
                      <Button className="action-btn btn btn-lg learnmore">
                        1
                      </Button>
                      <Button className="action-btn btn btn-lg learnmore">
                        2
                      </Button>
                      <Button className="action-btn btn btn-lg learnmore">
                        3
                      </Button>
                      <Button className="mint-btn btn btn-lg learnmore">
                        MINT
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Social/>
      <Footer />
    </>
  );
}
