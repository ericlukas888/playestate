import React from "react";
import { Container } from "react-bootstrap";
import "./index.scss";
import SpaceShip from "../../../../assets/images/community/space_ship.png";
import 'react-html5video/dist/styles.css';
import ReactPlayer from 'react-player/youtube'

const Community = () => {
 
  return (
    <Container className="community-section">
      <img src={SpaceShip} alt="space_ship" />
      <div className="community-content">
        <div className="row px-2">
          <div className="col-md-6 d-flex flex-column gap-5 pr-50 mt-5">
            <div className="community-card">
              ESTATE airdrops, IRL activities including hotels, travel packages,
              etc.
            </div>
            <div className="community-card">
              exclusive access to fractional ownership of real-life properties
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div className="community-header">
              <h2>Community</h2>
              <p>
                We as a community are taking control of how real estate is
                owned. By becoming a member you can maximize your return on
                investment and participate in DAO governance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-container">
      <ReactPlayer url='https://youtu.be/xEiCYo56KRk' />
      </div>
    </Container>
  );
};

export default Community;
