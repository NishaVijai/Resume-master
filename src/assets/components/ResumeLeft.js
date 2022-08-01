import React, { Component } from "react";
import ResumeLeftLang from "./ResumeLeftLang";

import langData from "./langData";

import "./resumeLeft.css";

export default class ResumeLeft extends Component {
  render() {
    const languageComponent = langData.map((data) => (
      <ResumeLeftLang
        key={data.id}
        langTitle={data.langTitle}
        languages={data.languages}
      >
        {" "}
        <hr />{" "}
      </ResumeLeftLang>
    ));
    return (
      <section className="resume-left">
        {/* <article className="personal">
          <h2 tabIndex="0">personal</h2>
          <p tabIndex="0">
            A self-motivated, creative, and ambitious individual with Masters
            degree in Computer Applications, as well as knowledge and
            proficiency in JavaScript, Typescript, React, Vue, Semantic HTML,
            CSS, and mobile responsive website development.
          </p>
        </article>

        <hr /> */}

        {languageComponent}
      </section>
    );
  }
}
