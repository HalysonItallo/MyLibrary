'use strict'
const Book = use('App/Models/Book');

class BookController {
  async store({ request }){
    const data = request.only(['title', 'name_author', 'publishing_company', 'picture']);
    const book = await Book.create({
    'title': data.title,
    'name_author': data.name_author,
    'publishing_company': data.publishing_company,
    'status': '0',
    'picture':  data.picture
    });
    return book;
  }
  
  async show ({ request }) {
    const data = request.only(['title', 'name_author', 'publishing_company']);
    const book = await Book.query()
    .where('title', 'like', `%${data.title}%`)
    .where('name_author', 'like', `%${data.name_author}%`)
    .where('publishing_company', 'like', `%${data.publishing_company}%`)
    .where('status', '!=', '1')
    .fetch();
    return book;
  }
    
  
}

module.exports = BookController
