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
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/noorunnisha-thamizuddin-319976105/"
                data-title="Nisha's LinkedIn Profile"
                className="custom-link address-link"
              >
                nishavijai@gmail.com
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/NishaVijai?tab=repositories"
                data-title="Nisha's GitHub Repo"
                className="custom-link address-link"
              >
                nishavijai@gmail.com
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
