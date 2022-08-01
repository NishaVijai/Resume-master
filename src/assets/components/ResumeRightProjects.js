import React, { Component } from "react";
import ExperienceContainer from "./ExperienceContainer";
import expData from "./experienceData";

export default class ResumeRightProjects extends Component {
  render() {
    const experienceComponent = expData.map((exp) => (
      <ExperienceContainer
        key={exp.id}
        date={exp.date}
        title={exp.title}
        compLink={exp.compLink}
        project={exp.project}
        description={exp.description}
        links={exp.links}
      />
    ));
    return (
      <article id="second">
        <hr className="hr-mobile-view" />
        <h3 tabIndex="0">experience</h3>
        <hr className="move-hr" />
        {experienceComponent}
      </article>
    );
  }
}
