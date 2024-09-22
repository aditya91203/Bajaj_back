// Import Express
const express = require('express');
const app = express();  // Initialize the Express app

app.use(express.json());  // Middleware to parse JSON requests

// POST method endpoint for /bfhl
app.post('/bfhl', (req, res) => {
    // Log the incoming request body to inspect the data
    console.log("Request Body: ", req.body);

    // Since req.body.data contains another 'data', access the inner data
    const data = Array.isArray(req.body.data.data) ? req.body.data.data : [];

    const user_id = "adi_22092004";  // Replace with your actual info
    const email = "your_email@srm.edu";
    const roll_number = "SRM12345";

    // Filter numbers and alphabets from the data
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    // Log the numbers and alphabets for debugging
    console.log("Numbers: ", numbers);
    console.log("Alphabets: ", alphabets);

    // Get lowercase alphabets and find the highest one (z -> a)
    const lowercase_alphabets = alphabets.filter(a => /^[a-z]+$/.test(a));
    console.log("Lowercase Alphabets: ", lowercase_alphabets);  // Log to check lowercase letters

    const highest_lowercase_alphabet = lowercase_alphabets.sort().slice(-1);
    console.log("Highest Lowercase Alphabet: ", highest_lowercase_alphabet);  // Log to check highest lowercase letter

    // Handle the file part (assuming Base64 input in "file_b64")
    const file_valid = req.body.data.file_b64 ? true : false;
    const file_mime_type = "image/png";  // Placeholder for MIME type
    const file_size_kb = 400;  // Placeholder for file size (just an example)

    // Respond with the required JSON structure
    res.json({
        "is_success": true,
        "user_id": user_id,
        "email": email,
        "roll_number": roll_number,
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highest_lowercase_alphabet,
        "file_valid": file_valid,
        "file_mime_type": file_mime_type,
        "file_size_kb": file_size_kb
    });
});

// GET method endpoint for /bfhl
app.get('/bfhl', (req, res) => {
    res.json({ "operation_code": 1 });
});

// Define the PORT
const PORT = process.env.PORT || 3000;

// Start the server and listen on the defined PORT
app.listen(PORT, () => {
    console.log("Server is starting...");
    console.log(`Server running on port ${PORT}`);
});