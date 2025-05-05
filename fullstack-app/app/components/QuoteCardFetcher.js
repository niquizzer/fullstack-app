
const QuoteCardFetcher = async () => {

const api_key = "ofGZ7KpvT0LVOiA+T6NS0A==vpgI9ZPpLwsaa2ng";
const api_link = "https://api.api-ninjas.com/v1/quotes";

try {
    const res = await fetch(api_link, {
        headers: {
            "X-Api-Key": api_key,
        },
        cache: "no-store",
    })

} catch (error) {
    console.log("Uh oh! Something's not working :", error);
}

    const data = await res.json();
    const quote = data[0].quote;
    const author = data[0].author;


    console.log("Quote: ", quote, "Author: ", author);
    return (
        <div id="quote"></div>
    );
}

export default QuoteCardFetcher;