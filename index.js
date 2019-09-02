const fetch = require('node-fetch');
const cheerio = require('cheerio');

const url = `https://www.waterstones.com/books/search/term/`

const searchBooks = (title) => {
    return fetch(`${url}${title}/format/16`)
        .then(resp => resp.text())
}

searchBooks(`Harry Potter`)
    .then(body => {

        const books = []

        const $ = cheerio.load(body);
        $('.inner').each(function(index, element) {
            const $element = $(element);
            const $image = $element.find('.image-wrap a img');
            const $title = $element.find('.title-wrap a');
            const book = {
                cover: $image.attr('src'),
                title: $title.text()
            };
            books.push(book);
        })
        console.log(books)
    })