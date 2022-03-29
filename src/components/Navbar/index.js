import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container } from "react-bootstrap";
import { Instagram, Linkedin, Github } from "react-bootstrap-icons";
import "./index.css";

const Navigation = () => {
	return (
		<div className="fontwrap">
			<Navbar bg="dark" expand="lg" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#home">Bryan Acosta</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#contact">Contact</Nav.Link>
							<Nav.Link href="#projects">Projects</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<Nav.Link
							href="https://github.com/TheBryan-Acosta"
							className="link"
						>
							<Instagram size={40} />
						</Nav.Link>
						<Nav.Link
							href="https://www.linkedin.com/in/bryan-acosta-0094b320b/"
							className="link"
						>
							<Linkedin size={40} />
						</Nav.Link>
						<Nav.Link
							href="https://github.com/TheBryan-Acosta"
							className="link"
						>
							<Github size={40} />
						</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;
