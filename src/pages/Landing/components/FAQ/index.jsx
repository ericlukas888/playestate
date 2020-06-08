import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "./index.scss";

const FAQ = () => {
  const accordians1 = [
    {header: 'What is a DAO?', title: 'A DAO is a Decentralized Autonamous Organization.  DAO are fully transparent and autonomous, community-driven entities with no central authority.  If you can understand the concept of open-source development when it related to software, apply similar principals to an organization, with the use of blockchain technology..   '},
    {header: 'What is a membership key?', title: 'Membership keys are collectibles, also powerful NFT providing players the ultimate way to maximize their earning potential and keep track of their player stats in the PlayEstates ecosystem.  Members will benefit from exclusive lifetime platform discounts, earning multipliers, token airdrops, and membership rewards both online and offline.  Holders can also purchase and hold PlayEstates Fractional Ownership NFTs.  '},
    {header: 'What is a crypto-wallet and why do i need it', title: 'A crypto wallet is a piece of software that is the liaison between the user and the blockchain.  This wallet holds your public and private keys which are needed to access your cryptocurrency.  The main reason you will need a crypto-wallet is to keep track of your transactions and tokens you earn.  We recommend using a Web3 enabled wallet such as MetaMask.  This will allow you to interact with the PlayEstates platform.'},
    {header: 'What is Playestates, and what does "backed by real asset" mean', title: 'PlayEstates is an ecosystem where games can be played to earn tokens.  Backed by real assets means their value derives from tangible real estate investments.'},
    {header: 'PlayEstates is based in US, do i have to be in the same geographic location to be able to join PLAYESTATES and use the properties?', title: 'Being a Web3 platform, you can participate from anywhere in the world.  As a fractional owner, you do not have property use right but you will receive all the benefits of having the asset in your investment portfolio.'},
  ];
  const accordians2 = [
    {header: 'PlayEstates mentions "blockchain" and "crypto". do i have to know anything about these to participate?', title: 'You only need a basic knowledge of how to use a Web 3 enabled crypto-wallet.'},
    {header: 'How do i stay updated about PlayEstates future updates?', title: 'Follow us on Twitter and join the Discord where we will send updated and announcements about upcoming events and contests.'},
    {header: 'What does "fractional ownership" mean? what are fractional ownership NFTs', title: 'Fractional ownership is the method of owning a share or percentage of an asset such as real estate.  Fractional ownership NFTs are a tokenized representation of property which are divided into tokens that represent a share of ownership.  Each property purchased by the platforms DAO treasury is represented by fractional NFTs that can be purchased by members.'},
    {header: "Will I be able to see the properties/assets that are purchased by the PlayEstates DAO Treasury?", title: 'PlayEstates will post quarterly reports of all real estate projects so you can see how much revenue is generated and how the asset appreciates in value.'},
  ];
  return (
    <Container className="faq-section" id="FAQ">
      <div className="d-flex align-items-center gap-5 faq-section-header flex-wrap">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column gap-3 mt-3">
          {
            accordians1.map((item, index) => (
              <Accordion key={index}>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>{item.title}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))
          }
        </div>

        <div className="col-md-6 d-flex flex-column gap-3 mt-3">
        {
            accordians2.map((item, index) => (
              <Accordion key={index}>
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>{item.title}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))
          }
        </div>
      </div>
    </Container>
  );
};

export default FAQ;
