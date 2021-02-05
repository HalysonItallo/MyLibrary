'use strict'

const Book = use('App/Models/Book');
const Commit = use('App/Models/Commit');

class CommitController {
  async commit({ request }){
    const data = request.only(['id_book', 'id_client']);
    
    const book = await Book.query()
      .where('id', '=' , data.id_book)
      .where('status', '=', '0')
      .update({
        status: '1'
    });
    if(book === 1){
      return await Commit.create({
        'id_book': data.id_book,
        'id_client': data.id_client,
      });
    }
  }  
    
  async devolution({ request }){
    const data = request.only(['id_book', 'id_client']);
    const book = await Book.query()
    .where('id', '=' , data.id_book)
    .where('status', '=', '1')
    .update({
      status: '0'
  });
  
    if(book === 1){
      return await Commit.query()
      .where('id_book', '=', data.id_book)
      .where('id_client', '=', data.id_client)
      .delete();  
    }
  }  
}

module.exports = CommitController
