import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";

/* Skill Images */
import html from "../../assets/images/skills/html.png";
import css from "../../assets/images/skills/css.png";
import express from "../../assets/images/skills/ExpressJS-logo.png";
import graphql from "../../assets/images/skills/GraphQL_Logo.svg.png";
import javascript from "../../assets/images/skills/javascript2.png";
import jquery from "../../assets/images/skills/jquery.png";
import mongoDB from "../../assets/images/skills/mongoDB.webp";
import node from "../../assets/images/skills/node.png";
import sql from "../../assets/images/skills/sql.webp";
import react from "../../assets/images/skills/React-icon.svg.png";

const Skills = () => {
	return (
		<div>
			<h1 className="skills-header"> My Skills</h1>
			<Container className="skills-container" id="skills">
				<img className="skills-img" src={html} alt="html-pic"></img>
				<img className="skills-img" src={css} alt="html-pic"></img>
				<img className="skills-img" src={javascript} alt="html-pic"></img>
				<img className="skills-img" src={jquery} alt="html-pic"></img>
				<img className="skills-img" src={graphql} alt="html-pic"></img>
				<img className="skills-img" src={react} alt="html-pic"></img>
				<img className="skills-img" src={sql} alt="html-pic"></img>
				<img className="skills-img" src={express} alt="html-pic"></img>
				<img className="skills-img" src={mongoDB} alt="html-pic"></img>
				<img className="skills-img" src={node} alt="html-pic"></img>
			</Container>
		</div>
	);
};

export default Skills;
