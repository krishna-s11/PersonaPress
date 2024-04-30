const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/cricker-score', async (req,res) => {
    const response = await axios.get('https://api.cricapi.com/v1/cricScore?apikey=391a5c1b-f68e-44f2-8322-373a79c7e256');
    const result = response.data.data.filter(d => d.series === "Indian Premier League 2024");
    res.status(200).json(result);
})

app.get('/', (req, res) => {
    res.send('Hello from server !');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})