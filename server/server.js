const express = require('express');
const axios = require('axios');
const cors = require('cors');
const db = require("./mongoose");
const User = require("./Model/userModel");
const bcrypt = require('bcrypt');
const converter = require('json-2-csv');

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
    const exists = await User.findOne({email: email});
    if(exists){
        return res.status(400).json({message: "User already exists"});
    }
    const hash_password = await bcrypt.hash(password,10);
    const data = await User.create({name, email: email, password: hash_password});
    await data.save();
    if(!data){
      return res.status(404).json({message: "Failed to create user"});
    }
    return res.status(200).json(data);
})

app.put('/like/:user_id', async (req, res) => {
    const {user_id} = req.params;
    const {news} = req.body;
    const data = await User.findOne({_id: user_id});
    data.liked.push(news);
    await data.save();
    res.status(200).json("Liked the news");
})

app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(email, password);
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json("Invalid credentials");
        }
        // let finalUser =  {b, ...rest} ;
        return res.status(200).json(user);
    } catch (error) {
        
    }
})

app.post('/bulk-news/:user_id', async (req, res) => {
    const {user_id} = req.params;
    const sports = (await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=04e73461caf044a29c27703c5a023fde'));
    const entertainment = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=04e73461caf044a29c27703c5a023fde');
    const technology = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=tech&apiKey=04e73461caf044a29c27703c5a023fde');
    const business = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=04e73461caf044a29c27703c5a023fde');
    // const health = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=04e73461caf044a29c27703c5a023fde');
    const science = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=04e73461caf044a29c27703c5a023fde');
    const national = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=04e73461caf044a29c27703c5a023fde');
    const international = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=04e73461caf044a29c27703c5a023fde');
    const finalNews = sports.data.articles.concat(entertainment.data.articles, technology.data.articles, business.data.articles, science.data.articles, national.data.articles, international.data.articles);
    const data = await User.findByIdAndUpdate(user_id, {news: finalNews});
    res.status(200).json({message: "News added successfully"});
})

app.post('/news', async (req, res) => {
    const sports = (await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=04e73461caf044a29c27703c5a023fde'));
    const entertainment = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=04e73461caf044a29c27703c5a023fde');
    const technology = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=tech&apiKey=04e73461caf044a29c27703c5a023fde');
    const business = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=04e73461caf044a29c27703c5a023fde');
    // const health = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=04e73461caf044a29c27703c5a023fde');
    const science = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=04e73461caf044a29c27703c5a023fde');
    const national = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=04e73461caf044a29c27703c5a023fde');
    const international = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=04e73461caf044a29c27703c5a023fde');
    const finalNews = sports.data.articles.concat(entertainment.data.articles, technology.data.articles, business.data.articles, science.data.articles, national.data.articles, international.data.articles);
    console.log(finalNews);
    converter({data: json.car, fields: ['name', 'price', 'color']}, function(err, csv) {
        if (err) console.log(err);
        fs.writeFile('cars.csv', csv, function(err) {
          if (err) throw err;
          console.log('cars file saved');
        });
      });
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})