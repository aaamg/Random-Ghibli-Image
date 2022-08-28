require('dotenv').config()
const express = require('express');
const fetch = require('node-fetch');
const port = 3000;

const app = express();

app.listen(port, () => {
    console.log('Listening on 3000')
})

// Serve Static Pages
app.use(express.static('public'));

// SSR data routes

app.get('/ghiblipic', async (req, res) => {
    const url = 'https://bing-image-search1.p.rapidapi.com/images/search?q=studio%20ghibli%20art';
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
      }
    };
    
    const bingRequest = await fetch(url, options)
        // .then(res => res.json())
        // .then(json => console.log(json))
        // .catch(err => console.error('error:' + err));
    const imageResponse = await bingRequest.json();
    res.json(imageResponse);
    console.log(JSON.stringify(imageResponse))
});

// app.get('')