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
        {languageComponent}
      </section>
    );
  }
}
