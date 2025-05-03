import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post";

export default function Posts({ token }) {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    function outputPost(post)
    {
        return <Post token = {token} key={post.id} postData={post} />
    }

    return (
        posts.map(outputPost)
    )
}
