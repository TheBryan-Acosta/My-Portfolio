import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	Github,
	CloudSunFill,
	PencilSquare,
	PeopleFill,
	MoonStarsFill,
	Moon,
} from "react-bootstrap-icons";
import AnimatedText from "react-animated-text-content";

import Tilt from "react-parallax-tilt";
import "./index.scss";

import clouds from "../../assets/projects/clouds.png";
import marvelous from "../../assets/projects/comic.jpg";
import pokemon from "../../assets/projects/pokemon.jpeg";
import utsymbol from "../../assets/projects/utsymbol.png";

const Projects = () => {
	const [scale_main] = useState(1.05);
	const [scale] = useState(1.05);

	return (
		<Container fluid className="project-container" id="projects">
			<h1 className="project-header">
				<AnimatedText
					type="words" // animate words or chars
					animation={{
						x: "200px",
						y: "-20px",
						scale: 1.1,
						ease: "ease-in-out",
					}}
					animationType="float"
					interval={0.06}
					duration={0.8}
					tag="p"
					className="animated-paragraph"
					includeWhiteSpaces
					threshold={0.1}
					rootMargin="20%"
				>
					Featured projects
				</AnimatedText>
			</h1>

			<Row>
				{/*Pokemon*/}
				<Col className="project-col-main">
					<div className="tilt-outer">
						<a
							href="https://thebryan-acosta.github.io/Web-Playground/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Tilt
								className="parallax-effect"
								scale={scale_main}
								transitionSpeed={2500}
								perspective={500}
								tiltMaxAngleX={2}
								tiltMaxAngleY={2}
							>
								<div
									className="tilt-scale"
									style={{
										backgroundImage: `url(${pokemon})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
									}}
								>
									<div className="header-main">
										<p className="logo-pokemon">Pokemon!</p>
										<hr />
									</div>
									<a
										href="https://github.com/TheBryan-Acosta/Web-Playground"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Github size={100} className="github-pokemon" />
									</a>
								</div>
							</Tilt>
						</a>
					</div>
				</Col>
			</Row>
			{/*Weather*/}
			<Row>
				<Col lg={6} className="project-col">
					<div className="tilt-outer">
						<a
							href="https://thebryan-acosta.github.io/Weather-Dashboard/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Tilt
								className="parallax-effect"
								scale={scale}
								transitionSpeed={2500}
								perspective={500}
								tiltMaxAngleX={5}
								tiltMaxAngleY={5}
							>
								<div
									className="tilt-scale"
									style={{
										backgroundImage: `url(${clouds})`,
										backgroundSize: `cover`,
									}}
								>
									<div className="header">
										<CloudSunFill size={100} className="cloud-icon" />
										<hr />
									</div>
									<a
										href="https://github.com/TheBryan-Acosta/Weather-Dashboard"
										target="_blank"
										rel="noreferrer noopener"
									>
										<img className="utsymbol" src={utsymbol}></img>
										<Github size={70} className="github-weather" />
									</a>
								</div>
							</Tilt>
						</a>
					</div>
				</Col>
				{/*Marvelous*/}
				<Col lg={6} className="project-col-main">
					<div className="tilt-outer">
						<a
							href="https://marveloushero.herokuapp.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<Tilt
								className="parallax-effect"
								scale={scale_main}
								transitionSpeed={2500}
								perspective={500}
								tiltMaxAngleX={2}
								tiltMaxAngleY={2}
							>
								<div
									className="tilt-scale"
									style={{
										backgroundImage: `url(${marvelous})`,
									}}
								>
									<div className="header-main">
										<div className="logo">MARVELOUS</div>
										<hr />
									</div>
									<a
										href="https://github.com/TheBryan-Acosta/marvelous"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Github size={100} className="github-marvel" />
										<img className="utsymbol" src={utsymbol}></img>
									</a>
								</div>
							</Tilt>
						</a>
					</div>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
};

export default Projects;
