import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import ResumeRightProjects from './ResumeRightProjects';

import './resumeRight.css';

export default class ResumeRight extends Component {
  componentDidMount() {
    const showOnPx = 100;
    const scrollContainer = () => {
      return document.documentElement || document.body;
    };
    const getTopButton = document.getElementById("to-top-button-id");

    window.addEventListener(
      "scroll",
      function (event) {
        if (scrollContainer().scrollTop > showOnPx) {
          getTopButton.classList.remove("hide");
        }
        else {
          getTopButton.classList.add("hide");
        }
      },
      false
    );
  }

  render() {
    const scrollToTop = () => {
      scroll.scrollTo(0, 0);
    };

    const scrollToExperience = () => {
      scroll.scrollTo(200);
    };

    return (
      <section id="resume-right-container">
        <nav className="nav-item">
          <Link
            aria-label="Experience section"
            data-title="Scroll to Experience Section"
            tabIndex="0"
            className="link-item link-item-experience"
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
        </nav>

        <article className="right-side-container">
          <ResumeRightProjects />

          <button id="to-top-button-id" aria-label="Go to top of the page" tabIndex="0" data-title="Go to top" className="to-top-button hide" onKeyPress={scrollToTop} onClick={scrollToTop}>
            {' '}
            Top{' '}
          </button>
        </article>
      </section>
    );
  }
}
