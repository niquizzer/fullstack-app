"use client"

import { useEffect } from "react";
import QuoteCardFetcher from "./QuoteCardFetcher";

const QuoteCard = () => {
useEffect(() => {
    QuoteCardFetcher();
}, [])
return (
    <QuoteCardFetcher />
);


}
export default QuoteCard;