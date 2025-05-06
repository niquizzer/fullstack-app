import useSelector from 'react-redux';

const SaveQuote = () => {
    const currentQuote = useSelector((state) => state.currentQuote);
    const currentAuthor = useSelector((state) => state.currentAuthor);
    const savedQuotes = useSelector((state) => state.savedQuotes);

   const saveCurrentQuote = () => {
    
   } 
}

export default SaveQuote;