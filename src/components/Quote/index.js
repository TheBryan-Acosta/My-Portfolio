import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

const Quote = () => {
	return (
		<Container className="about-container">
			<Row>
				<Col>
					<img
						src="https://bryans-hosted.s3.amazonaws.com/imgbin_moon-solar-eclipse-luna-programme-lunar-eclipse-lunar-phase-png.png"
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
