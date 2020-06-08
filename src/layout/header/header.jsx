import { Container, Button, Navbar, Nav, ListGroup} from "react-bootstrap";
import '../layout.scss';
import Logo from "../../assets/images/logo.png";
import {React} from "react";
import { FaTwitter, FaTelegramPlane, FaRedditAlien, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <Navbar expand="lg" className="header">
            <Container fluid>
                <div className="flex-grow-1 navbar-brand">
                    <Navbar.Brand >
                        <NavLink to="/"><img src={Logo} alt="" /></NavLink>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-2 my-2 my-lg-0 align-items-center" navbarScroll>
                    <Nav.Link href="#RoadMapSection">Roadmap</Nav.Link>
                    <Nav.Link href="#Team">Team</Nav.Link>
                    <Nav.Link href="#FAQ">FAQ</Nav.Link>
                    <NavLink to="/comingsoon">Membership Token</NavLink>
                    <NavLink to="/comingsoon">Contact Us</NavLink>
                </Nav>
                <ListGroup horizontal className="me-auto flex-grow-1 justify-content-center social">               
                    <ListGroup.Item ><a href="https://twitter.com/playestates"><FaTwitter/></a></ListGroup.Item >
                    <ListGroup.Item ><a href="https://t.me/playestates"><FaTelegramPlane/></a></ListGroup.Item >
                    <ListGroup.Item ><a href="https://reddit.com/u/PlayEstates"><FaRedditAlien/></a></ListGroup.Item >
                    <ListGroup.Item ><a href="https://www.youtube.com/channel/UCzK1nobRnbD0zYa-9hL54Ig"><FaYoutube/></a></ListGroup.Item >
                    <ListGroup.Item ><a href="https://www.linkedin.com/company/playestates"><FaLinkedinIn/></a></ListGroup.Item >
                </ListGroup>
                    <Button variant="btn action-btn ms-auto">Join the Community</Button>
                </Navbar.Collapse>
            </Container>            
        </Navbar>
        
    )
}