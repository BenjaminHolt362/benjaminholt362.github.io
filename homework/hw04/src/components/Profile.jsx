import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
    let [profileData, setProfileData] = useState([])

    async function getProfileData()
    {
        const profileData = await getDataFromServer(token, "/api/profile")
        setProfileData(profileData);
    }

    useEffect(() => {
            getProfileData();
        }, []);

    return (
        <header className="flex gap-4 items-center">
            <img src ={profileData.thumb_url}></img>
            <h2>{profileData.username}</h2>
            <h3>{profileData.first_name} {profileData.last_name}</h3>
        </header>
    );
}
