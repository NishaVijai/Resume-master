import React from 'react';

export default function ResumeLeftLang(props) {
	const languagesContainer = props.languages.map((lan) => (
		<p key={lan.id} tabIndex="0">{lan.lang}</p>
	));
	return (
		<React.Fragment>
			<article className="lang-title">
				<h2 tabIndex="0">{props.langTitle}</h2>
				<div className="languages">
					{languagesContainer}
				</div>
			</article>

			{props.children}
		</React.Fragment>
	);
}
