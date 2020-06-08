import { Container, Row, Col, Button, Image } from "react-bootstrap";
import BuildImage from "../../assets/images/playtobuild.png";
import "./landing.scss";
// import Globe from "../../assets/images/globe.svg";
import Play from "../../assets/images/play.svg";
import Earn from "../../assets/images/card.svg";
import Connect from "../../assets/images/connect.svg";
import Build from "../../assets/images/bar-chart.svg";
import Building from "../../assets/images/building.png";
import Player from "../../assets/images/artwork.png";
import Flag from "../../assets/images/flag.png";
import Mogule1 from "../../assets/images/01-PlayEstates-Key-Mogul.png";
import Mogule2 from "../../assets/images/02-PlayEstates-Developer.png";
import Mogule3 from "../../assets/images/04-PlayEstates-Key-Investor.png";
import VideoUrl from "../../assets/video/PNG.gif";
import VideoMogul1 from "../../assets/video/Mogul1.gif";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer";
import Social from "./components/Social";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import LoadMap from "./components/LoadMap";
import Community from "./components/Community";
import {React} from "react";
import { NavLink } from "react-router-dom";
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';


// const url = (name: string, wrap = false) =>
//   `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


export function Landing() {
  
  return (    
    <>
      <Header />
      <Container fluid className="contentWrapper py-5">
        <Row className="d-flex align-items-center pt-5 justify-content-center">
          <Col sm={11} lg={10} xl={9}>
            <Row className="bannerWrapper pb-4 d-flex align-items-center justify-content-center">
              <Col sm={12} lg={6} xl={6} className="bannerContent">
                <h1 className="sec-title">
                Game your way to own IRL Real Estate
                </h1>
                <p className="sec-description">
                Play games. Earn tokens. Own IRL real estate.
                </p>
                <Button className="action-btn btn btn-lg joinList">
                Join Our Community
                </Button>
              </Col>
              <Col sm={12} lg={6} xl={6}>
                <div className="GlobeImg position-relative text-center">
                  <div className="backgroundShadow"></div>
                 
                  <iframe src="/earth.htm" width="100%" height="650px" title="Earth"></iframe>
                </div>
              </Col>
            </Row>
            <Row className="buildWrapper pb-4 d-flex align-items-center justify-content-center">
              <Col sm={12} lg={6} xl={6} className="order-2 order-lg-1">
                <div className="position-relative text-center">
                  <div className="video-section">
                      <div className="video-container">
                        <Image src={VideoUrl} />
                      </div>
                    </div>
                </div>
              </Col>
              <Col sm={12} lg={6} xl={6} className="order-1 order-lg-2">
                <h2 className="sec-title">Play. Earn. Build.</h2>
                <p className="sec-description">
                  PlayEstates is taking control of the real estate industry, one
                  game at a time. You can play blockchain-based game through a
                  gamified model, build your wealth, and earn fractional
                  ownership of IRL real estate assets. Real Estate isn’t just
                  for boomers anymore.{" "}
                </p>
                <Button className="action-btn btn btn-lg learnmore">
                  <a href="https://app.gitbook.com/o/RfTS9UxvUkAGsQk0lyGG/s/OUCzwoPfu0J004RshL18/">Learn More</a>
                </Button>
              </Col>
            </Row>
            <Row className="buildWrapper pb-4 d-flex align-items-center justify-content-center">
              <Col
                sm={12}
                lg={6}
                xl={6}
                className="PlayToBuild position-relative"
              >
                <h2 className="sec-title-2">Together, we Play to Build</h2>
                <p className="sec-description">
                  You've heard of Play to Earn, but what about Play to Build?
                  The more currency you earn via our games, the more
                  opportunities you have to purchase your portion of real
                  estate. With complete transparency, you will know all the
                  details about the property you have fractional ownership of
                  (location, ROI, rental income, etc..). You no longer have to
                  feel lazy just because you love to game!
                </p>
                <div className="steps d-flex flex-wrap align-items-center justify-content-between mb-3">
                  <div className="step1 d-flex align-items-center">
                    <span className="icon me-2">
                      <img src={Play} alt="Play Icon" />
                    </span>
                    Play
                  </div>
                  <div className="step2 d-flex align-items-center">
                    <span className="icon me-2">
                      <img src={Earn} alt="Play Icon" />
                    </span>
                    Earn
                  </div>
                  <div className="step3 d-flex align-items-center">
                    <span className="icon me-2">
                      <img src={Connect} alt="Play Icon" />
                    </span>
                    Connect
                  </div>
                  <div className="step4 d-flex align-items-center">
                    <span className="icon me-2">
                      <img src={Build} alt="Play Icon" />
                    </span>
                    Build
                  </div>
                </div>
                <div className="progressBar position-relative">
                  <span className="progress" style={{ width: "90%" }}></span>
                </div>
                <div className="blurBG"></div>
              </Col>
              <Col sm={12} lg={6} xl={6}>
                <div className="position-relative text-center">
                  <img src={BuildImage} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <section id="playtoearn" className="position-relative py-5">
        <Container fluid className="pt-5">
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={11} lg={10} xl={9}>
              <Row className="d-flex align-items-center justify-content-center">
                <Col sm={12} lg={6} xl={6}>
                  <div className="align-items-center justify-content-center">
                    <div className="position-relative purchase-section">
                      <div className="d-flex">
                        <img src={Player} alt="player" className="player" />
                      </div>
                      <div className="card shadow flex-sm-row purchase-button-container">
                        <div className="mb-3 mb-sm-0 building-image-section">
                          <img
                            src={Building}
                            alt="building"
                            className="building img-fluid"
                          />
                        </div>
                        <div className="card-body p-0 align-items-center">
                          <p className="text-white city mt-2 mb-0">
                            <img src={Flag} alt="flag" className="flag" />
                            New York
                          </p>
                          <p className="text-white tower-name mb-0">
                            BALDWIN TOWER
                          </p>
                          <Button className="action-btn btn btn-sm purchase-btn">
                            Purchase {">"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={6} xl={6}>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Col sm={12} lg={3} xl={3}>
                      <p className="step-num">STEP 1</p>
                    </Col>
                    <Col sm={12} lg={9} xl={9}>
                      <p className="step-title text-white">The Key</p>
                      <p className="step-content text-white">
                        Purchase one of our key NFTs to join the Play Estates
                        Metaverse.
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Col sm={12} lg={3} xl={3}>
                      <p className="step-num">STEP 2</p>
                    </Col>
                    <Col sm={12} lg={9} xl={9}>
                      <p className="step-title text-white">Play</p>
                      <p className="step-content text-white">
                        Play a variety of fun and challenging games from Tower
                        defense to Earn Sims, and more!
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Col sm={12} lg={3} xl={3}>
                      <p className="step-num">STEP 3</p>
                    </Col>
                    <Col sm={12} lg={9} xl={9}>
                      <p className="step-title text-white">Earn</p>
                      <p className="step-content text-white">
                        Earn and save tokens to build your overall wealth.
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center justify-content-center">
                    <Col sm={12} lg={3} xl={3}>
                      <p className="step-num">STEP 4</p>
                    </Col>
                    <Col sm={12} lg={9} xl={9}>
                      <p className="step-title text-white">Build</p>
                      <p className="step-content text-white">
                        Cash in your tokens for fractional ownership of
                        real-world, money-generating real estate assets.
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="section-line"></div>
      </section>
      <Container fluid className="contentWrapper py-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col sm={11} lg={10} xl={9}>
            <Row
              id="membershipToken"
              className="pb-4 d-flex align-items-center justify-content-center"
            >
              <Col sm={12} lg={6} xl={6}>
                <h1 className="sec-title">Membership token</h1>
                <p className="sec-description">
                Get a Key while you can! With 9,980 Keys in our Founding Membership Token, it unlocks the power of building passive income. Each tier within the Founding Members Key provides you with different levels of exclusive, lifetime platform discounts, earning multipliers, utility token airdrops, rewards from Membership Token contests, and the ability to purchase and hold PlayEstates Fractionalized NFTs.
                </p>
                <Button className="action-btn btn btn-lg membership-learnmore-btn"><NavLink to="/comingsoon">Learn More</NavLink></Button>
              </Col>
              <Col sm={12} lg={6} xl={6}>
                <div className="membership-section right-video">
                  <div className="video-section">
                    <div className="video-container">
                      <Image src={VideoMogul1}/>
                    </div>
                    <div className="mogule-list">
                      <img src={Mogule1} alt="" />
                      <img src={Mogule2} alt="" />
                      <img src={Mogule3} alt="" />
                    </div>
                  </div>
                  <div className="collector-section">
                    <div className="collector-title">
                      <p className="text-white mb-2">COLLECTOR</p>
                    </div>

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
                        <NavLink to="/comingsoon">Buy</NavLink>
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Community/>
      <LoadMap />
      <Contact />
      <FAQ />
      <Social />
      <Footer />
      
    </>
  );
}
