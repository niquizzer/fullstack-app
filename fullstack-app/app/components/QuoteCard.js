"use server"; // Use "server" for server components

import QuoteCardFetcher from "./QuoteCardFetcher";
import SaveQuote from "./SaveQuote";

const QuoteCard = () => {

return (
    <div>
    <QuoteCardFetcher />
    <SaveQuote />
    </div>
);


}

export default QuoteCard;