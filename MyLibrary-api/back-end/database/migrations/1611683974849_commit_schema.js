'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommitSchema extends Schema {
  up () {
    this.create('commits', (table) => {
      table.increments()
      table.string('id_client', 20).notNullable()
      table.string('id_book', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('commits')
  }
}

module.exports = CommitSchema
