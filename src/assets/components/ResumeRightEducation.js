import React, { Component } from "react";
import EducationContainer from "./EducationContainer";
import educationData from "./educationData";

export default class ResumeRightEducation extends Component {
  render() {
    const educationComponent = educationData.map((data) => (
      <EducationContainer
        key={data.id}
        date={data.date}
        name={data.name}
        education={data.education}
        details={data.details}
      />
    ));
    return (
      <article id="third">
        <hr className="hr-mobile-view" />
        <h3 tabIndex="0">education</h3>
        <hr className="move-hr" />

        {educationComponent}
      </article>
    );
  }
}
