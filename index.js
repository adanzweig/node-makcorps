// Importing the required modules
require('dotenv').config(); // Loads environment variables from a .env file into process.env
const axios = require('axios'); // Importing axios for making HTTP requests

// Async function to get hotel details from the MAKCorps API
async function getHotelDetails(hotelName){
    try{
        // Setting up the parameters for the API request
        const params = {
            api_key: process.env.API_KEY, // API key from environment variable
            name: hotelName // Name of the hotel to search for
        }
        // Making a GET request to the API
        const response = await axios.get(`https://api.makcorps.com/mapping`,{params})
        return response.data; // Returning the data received from the API
    }catch(error){
        console.log('error', error); // Logging any errors that occur
    }
}

// Async function to get hotel prices from the MAKCorps API
async function getHotelPrices(hotelId){
    try{
        // Setting up the parameters for the API request
        const params = {
            api_key: process.env.API_KEY, // API key from environment variable
            hotelid: hotelId, // ID of the hotel
            cur: 'USD', // Currency for the prices
            rooms: 1, // Number of rooms
            adults: 2, // Number of adults
            checkin: '2023-12-27', // Check-in date
            checkout: '2023-12-29' // Check-out date
        }
        // Making a GET request to the API
        const response = await axios.get(`https://api.makcorps.com/hotel`,{params});
        return response.data; // Returning the data received from the API
    }catch(error){
        console.error('error', error); // Logging any errors that occur
    }
}

// Immediately Invoked Function Expression (IIFE) to run the async functions
(async()=>{
    // Getting hotel details and logging the document ID
    const hotel = await getHotelDetails('The Plaza New York');
    console.log(hotel[0].document_id);

    // Getting hotel prices and logging the price comparison
    const hotel_prices = await getHotelPrices(hotel[0].document_id);
    console.log(hotel_prices.comparison);

})() // IIFE ends here
