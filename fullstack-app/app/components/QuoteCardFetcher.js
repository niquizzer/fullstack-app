"use client"; // Use "client" for React components

import { useEffect, useState } from "react";

const QuoteCardFetcher = () => {
    const [quote, setQuote] = useState("Loading...");
    const [author, setAuthor] = useState("Loading...");

    useEffect(() => {   
        const fetchQuote = async () => {
            const api_key = "ofGZ7KpvT0LVOiA+T6NS0A==vpgI9ZPpLwsaa2ng";
            const api_link = "https://api.api-ninjas.com/v1/quotes";

            try {
                const res = await fetch(api_link, {
                    headers: {
                        "X-Api-Key": api_key,
                    },
                    cache: "no-store",
                });

                const data = await res.json();
                setQuote(data[0].quote);
                setAuthor(data[0].author);
                console.log("Quote: ", data[0].quote, "Author: ", data[0].author);

            } catch (error) {
                console.log("Uh oh! Something's not working :", error);
            }
        };

        fetchQuote(); // Call the async function inside useEffect
    }, []); // Empty dependency array ensures this runs only once on load

    return (
        <div id="quote">
            <p id="current-quote">{quote}</p>
            <p id="curretn-author">- {author}</p>
            <button onClick={() => window.location.reload()}>New Quote</button>
        </div>
    );
};

export default QuoteCardFetcher;