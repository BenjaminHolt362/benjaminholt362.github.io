import React from "react"
import LikeButton from "./LikeButton"
import BookmarkButton from "./BookmarkButton"

//TODO add buttons to post
export default function Post({ postData, token }) 
{
	return (
		<div>
			<h2> {postData.user.username} </h2>
			<img src={postData.image_url}></img>
			<LikeButton likeId={postData.current_user_like_id} postId={postData.id} token={token}/>
			<BookmarkButton bookmarkId={postData.current_user_bookmark_id} postId={postData.id} token={token}/>
			<p>{postData.caption}</p>
			<h2> {postData.likes.length} likes</h2>
		</div>
	)
}