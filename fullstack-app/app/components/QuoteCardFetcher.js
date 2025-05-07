import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const QuoteCardFetcher = () => {
    const setQuote = useDispatch();
    const quoteState = useSelector((state) => state.currentQuote);

    const setAuthor = useDispatch();
    const authorState = useSelector((state) => state.currentAuthor);

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
                
                setQuote({ type: "SET_QUOTE", payload: data[0].quote });
                setAuthor({ type: "SET_AUTHOR", payload: data[0].author });
                console.log("Quote: ", data[0].quote);
                console.log("Author: ", data[0].author);
       
            } catch (error) {
                console.log("Uh oh! Something's not working :", error);
            }
      };
                fetchQuote();
    }, []);

    return (
        <div id="quote">
            <p>{quoteState}</p>
            <p>- {authorState}</p>
            <button onClick={() => window.location.reload()}>New Quote</button>
        </div>
    );
};
       
export default QuoteCardFetcher;