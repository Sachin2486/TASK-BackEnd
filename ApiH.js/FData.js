const axios = require('axios');
const API_key = require("key");

const FILE_URL = 'https://example.com/students.json'; // Replace with your JSON file URL

axios.get(FILE_URL, { headers: { 'Authorization': API_KEY } })
    .then(response => {
        const recordings = response.data;
        console.log(recordings); // Replace with your desired output
    })
    .catch(error => {
        console.log(error);
    });
