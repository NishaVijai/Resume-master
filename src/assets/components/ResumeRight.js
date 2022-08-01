import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import ResumeRightProjects from './ResumeRightProjects';
import ResumeRightEducation from './ResumeRightEducation';

import './resumeRight.css';

export default class ResumeRight extends Component {
	render() {
		const scrollToTop = () => {
			scroll.scrollTo(0);
		};

		const scrollToExperience = () => {
			scroll.scrollTo(200);
		};

		const scrollToEducation = () => {
			scroll.scrollTo(1150);
		};

		return (
			<section id="resume-right-container">
				<nav className="nav-item">
					<Link
						aria-label="Experience section"
						title="Scroll to Experience Section"
						tabIndex="0"
						className="link-item"
						onKeyPress={scrollToExperience}
						activeClass="active"
						to="second"
						spy={true}
						smooth={true}
						offset={0}
						duration={1000}
					>
						Experience
					</Link>

					<Link
						aria-label="Education section"
						title="Scroll to Education Section"
						tabIndex="0"
						className="link-item"
						onKeyPress={scrollToEducation}
						activeClass="active"
						to="third"
						spy={true}
						smooth={true}
						offset={0}
						duration={1000}
					>
						Education
					</Link>
				</nav>

				<article className="right-side-container">
					<ResumeRightProjects />

					<ResumeRightEducation />

					<button aria-label="Go to top of the page" title="Scroll to the top of the page" tabIndex="0" className="to-top-button" onKeyPress={scrollToTop} onClick={scrollToTop}>
						{' '}
						Top{' '}
					</button>
				</article>
			</section>
		);
	}
}
