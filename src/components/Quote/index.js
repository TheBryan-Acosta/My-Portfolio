import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import moon from "../../assets/projects/pngegg.png";
const Quote = () => {
	return (
		<Container className="about-container">
			<Row>
				<Col sm={12} lg={6}>
					<img src={moon} alt="Moon" className="about-img"></img>
				</Col>
				<Col sm={12} lg={6}>
				<div className="textcontainer">
					<p className="about-text">
						the marble not yet carved can hold the form of every thought the
						greatest artist has.
					</p>
					<br />
					<p className="about-text-name">-Michelangelo</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Quote;
