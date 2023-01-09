import React, { Component } from "react";
import ResumeRight from "./ResumeRight";
import ResumeLeftLanguageContent from "./ResumeLeftLanguageContent";

import ResumePDF from "../images/NishasResume.pdf";

import "./resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <header>
          <h1>front-end web developer</h1>
          <p id="h1-hr" />
          <address id="first">
            <p>
              Mail:{" "}
              <a
                href="mailto:nishavijai@gmail.com"
                data-title="Nisha's g-mail address"
                className="custom-link address-link"
              >
                nishavijai@gmail.com
              </a>
            </p>

            <p>
              Mobile:{" "}
              <a href="tel:+45-53265717" data-title="Nisha's mobile number" className="custom-link address-link">
                +45-53265717
              </a>
            </p>

            <p>
              Website:{" "}
              <a
                href="https://nishasportfolio2023.netlify.app/"
                target="_blank"
                rel="noopener  noreferrer"
                data-title="Nisha's portfolio"
                className="custom-link address-link address-portfolio-link"
              >
                nishasportfolio
              </a>
            </p>
            <p>
              Download:{" "}
              <a href={ResumePDF} target="_blank" rel="noopener  noreferrer" data-title="Download Nisha's resume" className="custom-link address-link">
                Resume as PDF
              </a>
            </p>
          </address>
          {/* <div
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
          </div> */}
        </header>

        <label>
          <input type="checkbox" />
          <span className="menu"> <span className="hamburger"></span> </span>
          <ResumeLeftLanguageContent />
        </label>

        <aside>
          <ResumeLeftLanguageContent />
        </aside>

        <main>
          <ResumeRight />
        </main>
      </div>
    );
  }
}
