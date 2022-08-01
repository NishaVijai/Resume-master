import React, { Component } from "react";
import ResumeLeft from "./ResumeLeft";
import ResumeRight from "./ResumeRight";

import ResumePDF from "../images/resume_nishavijai_vercel_app.pdf";

import "./resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <header>
          <h1 tabIndex="0">front-end web developer</h1>
          <p id="h1-hr" />
          <address id="first">
            <p tabIndex="0">
              Mail:{" "}
              <a
                href="mailto:nishavijai@gmail.com"
                title="Nisha's g-mail address"
              >
                nishavijai@gmail.com
              </a>
            </p>

            <p tabIndex="0">
              Mobile:{" "}
              <a href="tel:+45-53265717" title="Nisha's mobile number">
                +45-53265717
              </a>
            </p>

            <p tabIndex="0">
              Website:{" "}
              <a
                href="https://nishas-portfolio-2019.vercel.app/"
                target="_blank"
                rel="noopener  noreferrer"
              >
                nishasportfolio
              </a>
            </p>
            <p tabIndex="0">
              Download:{" "}
              <a href={ResumePDF} target="_blank" rel="noopener  noreferrer">
                Resume as PDF
              </a>
            </p>
          </address>
          <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="light"
            data-type="VERTICAL"
            data-vanity="noorun-nisha-319976105"
            data-version="v1"
          >
            LinkedIn Profile:{" "}
            <a
              className="badge-base__link LI-simple-link"
              href="https://dk.linkedin.com/in/noorun-nisha-319976105?trk=profile-badge"
              target="_blank"
              rel="noopener  noreferrer"
            >
              Noorunnisha
            </a>
          </div>
        </header>
        <aside>
          <ResumeLeft />
        </aside>

        <main>
          <ResumeRight />
        </main>
      </div>
    );
  }
}
