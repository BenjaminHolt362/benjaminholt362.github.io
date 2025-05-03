import React from "react"
import { postDataToServer, deleteDataFromServer } from "../server-requests"

export default function BookmarkButton({ bookmarkId, postId })
{
	const pressOnEnter = e => {
		if(e.keyCode === 13)
			this.btn.click()
	}

	async function addBookmark()
	{
		const sendData =
		{
			post_id: postId,
		}
		const response = await postDataToServer(token, "/api/bookmarks", sendData)
	}

	async function deleteBookmark()
	{
		const url = '/api/bookmarks/' + bookmarkId;
		const response = await deleteDataFromServer(token, url)
	}

	if(bookmarkId)
	{
		return (
			<button onClick={deleteBookmark}>
            	  <i className="fas fa-bookmark" role="switch" aria-label="Unbookmark button" aria-checked="true" tabIndex={0}></i>
            	</button>
		)
	}
	else
	{
		return (
			<button onClick={addBookmark}>
            	  <i className="far fa-bookmark" role="switch" aria-label="Bookmark button" aria-checked="false" tabIndex={0}></i>
            	</button>
		)
	}
}