import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
 import moon from "../../assets/projects/moon.png";
const Quote = () => {
	return (
		<Container className="about-container">
			<Row>
				<Col>
					<img
						src={moon}
						alt="Moon"
						className="about-img"
					></img>
				</Col>
				<Col>
					<p className="about-text">
						Aim for the Moon. If you miss, you may hit a star...
					</p>
					<br />
					<p className="about-text-name">-W. Clement Stone</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Quote;
