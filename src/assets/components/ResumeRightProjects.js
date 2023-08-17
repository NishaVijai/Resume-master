import React, { Component } from "react";
import ExperienceContainer from "./ExperienceContainer";
import expData from "./experienceData";
import { v4 as uuidv4 } from "uuid";

export default class ResumeRightProjects extends Component {
  render() {
    const experienceComponent = expData.map((exp) => (
      <ExperienceContainer
        key={uuidv4()}
        date={exp.date}
        title={exp.title}
        dataTitle={exp.dataTitle}
        compLink={exp.compLink}
        project={exp.project}
        description={exp.description}
        links={exp.links}
      />
    ));
    return (
      <article id="second">
        <hr className="hr-mobile-view" />
        <h3>experience</h3>
        <hr className="move-hr" />
        {experienceComponent}
      </article>
    );
  }
}
