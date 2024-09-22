// Import required dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the app
const app = express();

// Set the port
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Define the /bfhl POST route
app.post('/bfhl', (req, res) => {
  console.log('Request Body:', req.body);

  // Access the data array from the request body
  const data = Array.isArray(req.body.data) ? req.body.data : [];

  // Extract the user information
  const user_id = 'adi_22092004';  // Replace with actual user data
  const email = 'your_email@srm.edu';  // Replace with actual email
  const roll_number = 'SRM12345';  // Replace with actual roll number

  // Filter numbers and alphabets from the data
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));

  // Get lowercase alphabets and find the highest one (z -> a)
  const lowercase_alphabets = alphabets.filter(a => /^[a-z]$/.test(a));
  const highest_lowercase_alphabet = lowercase_alphabets.sort().slice(-1);

  // Log the filtered values for debugging
  console.log('Numbers:', numbers);
  console.log('Alphabets:', alphabets);
  console.log('Highest Lowercase Alphabet:', highest_lowercase_alphabet);

  // Return the result in the required format
  res.json({
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highest_lowercase_alphabet,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is starting...`);
  console.log(`Server running on port ${PORT}`);
});
