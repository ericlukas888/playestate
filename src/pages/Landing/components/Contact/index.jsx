import React from "react";
import { Container} from "react-bootstrap";
import "./index.scss";
import Image1 from "../../../../assets/images/team/1.png";
import Image2 from "../../../../assets/images/team/2.png";
import Image3 from "../../../../assets/images/team/3.png";
import Image5 from "../../../../assets/images/team/5.png";
import Image6 from "../../../../assets/images/team/6.png";
import Logo1 from "../../../../assets/images/team/logo1.png";
import Logo2 from "../../../../assets/images/team/logo2.png";
import Logo3 from "../../../../assets/images/team/logo3.jpg";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const items = [
    { name: "William Guo", role: "CEO/founder", image: Image2, url: "https://www.linkedin.com/in/william-guo1/" },
    { name: "Zhimin(kelvin) Gao", role: "Technical Cofounder", image: Image1, url: "https://www.linkedin.com/in/zhimin-gao-63268421" },
    { name: "Mohsen Tavakoli", role: "CTO", image: Image2, url: "https://www.linkedin.com/in/mohsen-blockchain-guru/" },
    { name: "Marc Leon", role: "Marketing/Community Manager", image: Image3, url: " https://www.linkedin.com/in/william-guo1/" },    
    { name: "Genevieve Daylusan", role: "Administration", image: Image3, url: "" },    
    { name: "Emanuel Orlando", role: "Legal Counsel", image: Image5, url: "https://www.linkedin.com/in/emanuelorlando/" },
    { name: "James Shockley", role: "Marketing", image: Image6, url: "https://www.linkedin.com/in/james-shockley-2a5102b5/" },
    { name: "John Huggins", role: "NFT Art Designer", image: Image6, url: "https://www.linkedin.com/in/john-huggins-b89956162" },
  ];
  return (
    <Container className="contact-section" id="Team">
      <div className="d-flex align-items-center gap-5 contact-header flex-wrap">
        <h1>Join The Team</h1>
      </div>
      <p className="contact-introduction">
        A diverse group of realestate, gaming, crypto and web3 professionals.
        PlayEstate is expanding! Shoot us an email to inquire about some of our
        upcoming openings.
      </p>

      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="team-section">
              <div>
                <h5>{item.name}</h5>
                <p>{item.role}</p>
              </div>
              <div className="social-contact">
                <a className="linkedin-icon" href={item.url}><FaLinkedin/></a>
              </div>
            </div>
          </div>
        ))}
      </div>
        
      <div className="row partnership mt-5">
        <div className="row text-center mt-5">
          <h2>Partnerships</h2>
        </div>
        <div className="partner-logo mt-5">
          <div className="row">
            <div className="col-md-4 mb-2 d-flex justify-content-center">
              <img src={Logo1} alt="logo1" />
            </div>
            <div className="col-md-4 mb-2 d-flex justify-content-center">
              <img src={Logo2} alt="logo2" />
            </div>
            <div className="col-md-4 mb-2 d-flex justify-content-center">
              <img src={Logo3} alt="logo3" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
