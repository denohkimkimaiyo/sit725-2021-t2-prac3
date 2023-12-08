const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/submit-form', (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    
    console.log('Form submitted:');
    console.log('First Name:', first_name);
    console.log('Last Name:', last_name);
    console.log('Email:', email);
    console.log('Password:', password);


    res.send('Form submitted successfully!');
});


const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});