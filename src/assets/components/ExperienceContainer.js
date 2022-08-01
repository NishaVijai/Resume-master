import React from "react";

export default function ExperienceContainer(props) {
  const imgList = props.links.map((lin) => (
    <a
      key={lin.id}
      href={lin.projLink}
      target="_blank"
      rel="noopener  noreferrer"
      title={lin.altText}
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
    <li key={desc.id} tabIndex="0">
      {desc.des}
    </li>
  ));

  return (
    <article className="projects-container">
      <section className="projects left-section">
        <p tabIndex="0">{props.date}</p>
        <p tabIndex="0">{props.title}</p>
        <p tabIndex="0">
          <a href={props.compLink} target="_blank" rel="noopener  noreferrer">
            {props.project}
          </a>
        </p>
      </section>

      <section className="project-description">
        <ul>
          {descriptionContainer}
          <li tabIndex="0">{imgList}</li>
        </ul>
      </section>
    </article>
  );
}
