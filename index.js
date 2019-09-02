const fetch = require('node-fetch')
const cheerio = require('cheerio')

const url = `https://www.waterstones.com/books/search/term/`

const searchBooks = (title) => {
    return fetch(`${url}${title}/format/16`)
        .then(resp => resp.text())
}

searchBooks(`Harry Potter`)
    .then(body => {
        const $ = cheerio.load(body);
        $('.inner').each(function(index, element) {
            const $element = $(element);
            const $image = $element.find('.image-wrap a img')
            console.log($image.attr('src'))
        })
        
    })