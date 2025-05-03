import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {
    let [suggestions, setSuggestions] = useState([])

    async function getSuggestions()
        {
            const suggestionsData = await getDataFromServer(token, "/api/suggestions");
            console.log(suggestionsData);
            setSuggestions(suggestionsData);
        }

    useEffect(() => {
                getSuggestions();
            }, []);

    function outputSuggestion(suggestion)
    {
        return <Suggestion key={suggestion.id} suggestionData={suggestion}/>
    }
        
    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>

            <section className="flex justify-between items-center mb-4 gap-2">
                {suggestions.map(outputSuggestion)}
            </section>
        </div>
    );
}
