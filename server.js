const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define your routes here
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-form', (req, res) => {
    const { first_name, last_name, email, message } = req.body;

    // Log form data to the server console
    console.log('Form submitted:');
    console.log('First Name:', first_name);
    console.log('Last Name:', last_name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});