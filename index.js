const express = require('express')
const app = express();
const scraper = require('./scraper');

app.get('/', (req, res) => {
    res.json({
        message: 'scraping is fun!'
    })
})

app.get('/search/:title', (req, res) => {
    scraper.searchBooks(req.params.title)
    .then(books => res.json(books))
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})