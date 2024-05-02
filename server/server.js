const express = require('express');
const axios = require('axios');
const cors = require('cors');
const db = require("./mongoose");
const User = require("./Model/userModel");

const app = express();

app.use(express.json());
app.use(cors());
db();

app.get('/cricker-score', async (req,res) => {
    const response = await axios.get('https://api.cricapi.com/v1/cricScore?apikey=391a5c1b-f68e-44f2-8322-373a79c7e256');
    const result = response.data.data.filter(d => d.series === "Indian Premier League 2024");
    res.status(200).json(result);
})

app.get('/', (req, res) => {
    res.send('Hello from server !');
});

app.post('/signup', async (req, res) => {
    const {name, email, password} = req.body;
    const exists = User.findOne({email: email});
    if(exists){
        return res.status(400).json({message: "User already exists"});
    }
    const hash_password = await bcrypt.hash(password,10);
    const data = await User.create({name, email: email, hash_password: hash_password});
    await data.save();
    if(!data){
      return res.status(404).json({message: "Failed to create user"});
    }
    return res.status(200).json(data);
})

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.hash_password);
        if(!isMatch){
            return res.status(400).json(user);
        }
        return res.status(200).json({message: "User logged in successfully", token: "signintoken"});
    } catch (error) {
        
    }
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})