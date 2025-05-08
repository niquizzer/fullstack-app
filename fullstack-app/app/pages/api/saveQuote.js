export default async function handler(req, res) {
    if (req.method === "POST"){
        //todo
        // Save the quote and author to the database
        console.log("Saving quote to the database...");
    } else if (req.method === "GET"){
        //todo
        // Fetch all the saved quotes from the database
        console.log("Retrieving saved quotes from the database...");
    }
}