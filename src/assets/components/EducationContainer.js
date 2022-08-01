import React from "react";

export default function EducationContainer(props) {
  return (
    <article className="education-container">
      <section className="degrees left-section">
        <p tabIndex="0">{props.date}</p>

        <p tabIndex="0">{props.name}</p>
      </section>

      <section className="education-description">
        <p tabIndex="0">{props.education}</p>
        <p tabIndex="0">{props.details}</p>
        {/* {props.certificateURL ? (
          <a
            href={props.certificateURL}
            target="_blank"
            rel="noopener  noreferrer"
          >
            Certificate
          </a>
        ) : null} */}
      </section>
    </article>
  );
}
