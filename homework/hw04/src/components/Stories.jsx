import React, { useEffect, useState } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {
    let [stories, setStories] = useState([])

    async function getStories()
        {
            const stories = await getDataFromServer(token, "/api/stories")
            console.log(stories);
            setStories(stories);
        }

    useEffect(() => {
                getStories();
            }, []);

    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {stories.map((story) => (
                <div>
                    <img src={story.user.thumb_url}></img>
                    <p>{story.user.username}</p>
                </div>
            ))}
        </header>
    );
}
