import React, { Component } from "react";
import ResumeRight from "./ResumeRight";
import ResumeLeftLanguageContent from "./ResumeLeftLanguageContent";

import NishasResume from "../images/NishasResume.pdf";

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
              Nisha's Contact E-mail:{" "}
              <a
                href="mailto:nishavijai@gmail.com"
                data-title="Nisha's g-mail address"
                className="custom-link address-link"
              >
                nishavijai@gmail.com
              </a>
            </p>

            <p>
              LinkedIn Link:{" "}
              <a
                href="https://www.linkedin.com/in/noorunnisha-thamizuddin-319976105/"
                target="_blank"
                rel="noopener noreferrer"
                data-title="Nisha's LinkedIn Profile"
                className="custom-link address-link"
              >
                Nisha's LinkedIn Profile
              </a>
            </p>

            <p>
              GitHub Link:{" "}
              <a
                href="https://github.com/NishaVijai"
                target="_blank"
                rel="noopener noreferrer"
                data-title="Nisha's GitHub Repo"
                className="custom-link address-link"
              >
                Nisha's GitHub Repo
              </a>
            </p>

            <p>
              Download:{" "}
              <a href={NishasResume} target="_blank" rel="noopener noreferrer" data-title="Download Nisha's resume" className="custom-link address-link">
                Resume as PDF
              </a>
            </p>
          </address>
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
