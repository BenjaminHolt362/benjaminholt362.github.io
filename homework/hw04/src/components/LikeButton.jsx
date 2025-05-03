import React from "react"
import { postDataToServer, deleteDataFromServer } from "../server-requests"

export default function LikeButton({ likeId, postId })
{
	const pressOnEnter = e => {
		if(e.keyCode === 13)
			this.btn.click()
	}

	async function addLike()
	{
		const sendData =
		{
			post_id: postId,
		}
		const response = await postDataToServer(token, "/api/likes", sendData)
	}

	async function removeLike()
	{
		const url = '/api/likes/' + likeId;
		const response = await deleteDataFromServer(token, url)
	}

	if(likeId)
	{
		return (
			<button onClick={removeLike}>
            	  <i className="fas text-red-700 fa-heart" role="switch" aria-label="Unlike button" aria-checked="true" tabIndex={0}> </i>
        	    </button>
		);
	}
	else
	{
		return (
			<button onClick={addLike}>
            	  <i className="far fa-heart" role="switch" aria-label="Like button" aria-checked="false" tabIndex={0}> </i>
        	    </button>
		);
	}
}