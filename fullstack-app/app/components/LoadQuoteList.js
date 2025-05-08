import { useEffect } from "react";

const LoadQuoteList = () => {

    useEffect(() => {
        const fetchSavedQuotes = async () => {
            const res = await fetch('/pages/api/saveQuote', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            console.log("Saved Quotes: ", data);
        }
        fetchSavedQuotes(); // Call the async function inside useEffect

        
    }, [])

}

export default LoadQuoteList;