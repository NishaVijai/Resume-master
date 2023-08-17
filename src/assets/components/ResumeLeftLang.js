import React from 'react';
import { v4 as uuidv4 } from "uuid";

export default function ResumeLeftLang(props) {
	const languagesContainer = props.languages.map((lan) => (
		<p key={uuidv4()}>{lan.lang}</p>
	));
	return (
		<React.Fragment>
			<article className="lang-title">
				<h2>{props.langTitle}</h2>
				<div className="languages">
					{languagesContainer}
				</div>
			</article>

			{props.children}
		</React.Fragment>
	);
}
