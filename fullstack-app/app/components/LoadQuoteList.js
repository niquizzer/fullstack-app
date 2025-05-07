const { useEffect } = require("react")

const LoadQuoteList = () => {

    useEffect(() => {
        const fetchSavedQuotes = async () => {
            const res = await fetch('/api/getSavedQuotes', {
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