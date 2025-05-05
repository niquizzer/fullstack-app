
const QuoteCardFetcher = () => {

const api_key = "ofGZ7KpvT0LVOiA+T6NS0A==vpgI9ZPpLwsaa2ng";
const api_link = "https://api.api-ninjas.com/v1/quotes";

    fetch(api_link, {
        headers: {
            "X-Api-Key": api_key,
        }
    })
    .then((res) => res.json())
    .then((quote) => {
        console.log(quote);
    })
    .catch((error) => console.error("Error fetching", error))
}

export default QuoteCardFetcher;    