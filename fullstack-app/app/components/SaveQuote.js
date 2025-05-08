import { useSelector } from 'react-redux';

const SaveQuote = () => {
    // Save all the necessary data from the Redux store
    const currentQuote = useSelector((state) => state.currentQuote);
    const currentAuthor = useSelector((state) => state.currentAuthor);
   
    const saveCurrentQuote = async () => {
    const initiateSave = await fetch ('/pages/api/saveQuote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            quote: currentQuote,
            author: currentAuthor
        }),
   })
  console.log("Response from saveQuote API: ", initiateSave); 
}

    const handleSave = () => {

        saveCurrentQuote()
            .then((response) =>  {
                if (response.ok) {
                    console.log("Quote saved successfully!");
                } else {
                    console.error("Failed to save quote.");
                }
           })
            .catch((error) => {
                console.error("Error saving quote:", error);
            })
    }

    return (
        <div>
        <button onClick={handleSave}>Save Quote</button>
        </div>
    )
}

export default SaveQuote;
// This component is responsible for saving the current quote to the database