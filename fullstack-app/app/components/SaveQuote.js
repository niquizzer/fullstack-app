import useSelector from 'react-redux';

const SaveQuote = () => {

}

export const saveCurrentQuote = async () => {
    console.log("Saving current quote...");
    
    // Save all the necessary data from the Redux store
    const currentQuote = useSelector((state) => state.currentQuote);
    const currentAuthor = useSelector((state) => state.currentAuthor);

    const initiateSave = await fetch ('/api/saveQuote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            quote: currentQuote,
            author: currentAuthor
        }),
   })
   
}

export default SaveQuote;