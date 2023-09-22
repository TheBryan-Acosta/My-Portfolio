import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import moon from "../../assets/projects/pngegg.png";
const Quote = () => {
	return (
		<Container className="about-container">
			<Row>
				<Col>
					<img src={moon} alt="Moon" className="about-img"></img>
				</Col>
				<Col>
					<p className="about-text">
						The marble not yet carved can hold the form of every thought the
						greatest artist has.
					</p>
					<br />
					<p className="about-text-name">-Michelangelo</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Quote;
