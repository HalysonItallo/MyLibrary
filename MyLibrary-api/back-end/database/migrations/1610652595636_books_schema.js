'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments()
      table.string('title', 250).notNullable().unique()
      table.string('name_author', 80).notNullable().unique()
      table.string('publishing_company', 120).notNullable().unique()
      table.string('status', 10).unique();
      table.string('picture',250).unique();
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
