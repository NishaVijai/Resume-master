import React, { Component } from "react";
import EducationContainer from "./EducationContainer";
import educationData from "./educationData";
import { v4 as uuidv4 } from "uuid";

export default class ResumeRightEducation extends Component {
  render() {
    const educationComponent = educationData.map((data) => (
      <EducationContainer
        key={uuidv4()}
        date={data.date}
        name={data.name}
        education={data.education}
        details={data.details}
      />
    ));
    return (
      <article id="third">
        <hr className="hr-mobile-view" />
        <h3>education</h3>
        <hr className="move-hr" />

        {educationComponent}
      </article>
    );
  }
}
