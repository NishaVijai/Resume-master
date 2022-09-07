import React from "react";

export default function EducationContainer(props) {
  return (
    <article className="education-container">
      <section className="degrees left-section">
        <p>{props.date}</p>

        <p>{props.name}</p>
      </section>

      <section className="education-description">
        <p>{props.education}</p>
        <p>{props.details}</p>
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
