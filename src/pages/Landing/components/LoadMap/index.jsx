import React from "react";
import { Container, Form, ListGroup } from "react-bootstrap";
import "./index.scss";

const LoadMap = () => {
    return (
    <Container className="d-flex justify-content-center pt-5" fluid>
      <div className="loadmap-section" id="RoadMapSection">
        <div className="loadmap-section-header">
          <h1>Mint RoadMap</h1>
          <hr></hr>
          <p>This is our immediate roadmap!</p>
          <p>Consider it a rough timeline plz.</p>
        </div>  
        <div className="roadmap-section d-flex flex-row justify-content-between w-100 align-items-end">
          <div className="roadmap-section-container">
            <div className="roadmap-section-data">May 2022</div>
            <div className="roadmap-section-items d-flex flex-column">
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Early Access Begins" />
                </Form.Group>
                <ListGroup>
                  <ListGroup.Item><span>•</span>Whitelist - Purchase NFT (Presale)</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Waitlist - Discord Access</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Reward / Level System</ListGroup.Item>
                </ListGroup>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Initial Marketing Campaign" />
                </Form.Group>
                <ListGroup>
                  <ListGroup.Item><span>•</span>Influencer Partnerships</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Youtube Content Rollout</ListGroup.Item>
                  <ListGroup.Item><span>•</span>P.R. </ListGroup.Item>
                  <ListGroup.Item><span>•</span>Social Media Kickoff</ListGroup.Item>
                </ListGroup>
              </div>              
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Initial Membership Token Release" />
                </Form.Group>
                <ListGroup>
                  <ListGroup.Item><span>•</span>Sale Launch</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Giveaway Campaigns</ListGroup.Item>
                </ListGroup>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Branding Identity" />
                </Form.Group>
                <ListGroup>
                </ListGroup>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Seed Round / Capital Fundraising" />
                </Form.Group>
                <ListGroup>
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="roadmap-section-container">
            <div className="roadmap-section-data">June - July 2022</div>
            <div className="roadmap-section-items d-flex flex-column">
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="BD For Contents" />
                </Form.Group>
                <ListGroup>
                  <ListGroup.Item><span>•</span>Real Estate Acquisition Begins</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Digital Content Collaboration Projects</ListGroup.Item>
                </ListGroup>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Team Expansion" />
                </Form.Group>
                <ListGroup>
                  <ListGroup.Item><span>•</span>Marketing Experts</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Dev Pro’s</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Operation Specialist</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Prep For Coin / Token Sale</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="roadmap-section-container">
            <div className="roadmap-section-data">August - September 2022</div>
            <div className="roadmap-section-items d-flex flex-column">
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Community Expansion Period" />
                </Form.Group>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Finalize Brand Identity" />
                </Form.Group>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Opening of MVP Division" />
                </Form.Group>
                <ListGroup>
                  <ListGroup.Item><span>•</span>Digital Contents</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Marketplace Opening</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Fractional Ownership NFT</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Giveaways / Promotions / Merch</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
          <div className="roadmap-section-container">
            <div className="roadmap-section-data">Q4 2022 - Q1 2023</div>
            <div className="roadmap-section-items d-flex flex-column">
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="MVP Refining" />
                </Form.Group>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Team Expansion " />
                </Form.Group>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Content Expansion" />
                </Form.Group>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="Prep For Launch" />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="roadmap-section-container">
            <div className="roadmap-section-data">Q2 2023 </div>
            <div className="roadmap-section-items d-flex flex-column">
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled   label="Platform Launch To The Public" />
                </Form.Group>
                <ListGroup>
                  <ListGroup.Item><span>•</span>Expand Community</ListGroup.Item>
                  <ListGroup.Item><span>•</span>Expand Contents</ListGroup.Item>
                </ListGroup>
              </div>
              <div className="roadmap-section-item">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" disabled  label="International Real Estate Projects" />
                </Form.Group>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Container>
  );
};

export default LoadMap;
