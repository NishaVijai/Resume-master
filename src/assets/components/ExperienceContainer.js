import React from "react";

export default function ExperienceContainer(props) {
  const imgList = props.links.map((lin) => (
    <a
      className="projects-link projects-link-title"
      key={lin.id}
      href={lin.projLink}
      target="_blank"
      rel="noopener  noreferrer"
      // title={lin.altText}
      data-title={lin.altText}
    >
      {lin.linkName}{" "}
      <img
        src={lin.projImgLink}
        alt={lin.altText}
        loading="lazy"
        title={lin.imgTitle}
      />
    </a>
  ));

  const descriptionContainer = props.description.map((desc) => (
    <li key={desc.id}>
      {desc.des}
    </li>
  ));

  return (
    <article className="projects-container">
      <section className="projects left-section">
        <p>{props.date}</p>
        <p>{props.title}</p>
        <p>
          <a href={props.compLink} target="_blank" rel="noopener  noreferrer" data-title={props.dataTitle} className="custom-link experience-site-link">
            {props.project}
          </a>
        </p>
      </section>

      <section className="project-description">
        <ul>
          {descriptionContainer}
          <li>{imgList}</li>
        </ul>
      </section>
    </article>
  );
}
