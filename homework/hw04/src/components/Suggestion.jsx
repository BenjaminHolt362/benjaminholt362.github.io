import React from "react"

export default function Suggestion({ suggestionData })
{
	return (
		<div>
			<img src={suggestionData.thumb_url}></img>
			<p>{suggestionData.username}</p>
			<p>Suggested for you</p>
		</div>
	);
}