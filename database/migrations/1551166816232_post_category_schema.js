'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostCategorySchema extends Schema {
  up () {
    this.create('post_categories', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 80)
      table.boolean('status')
    })
  }

  down () {
    this.drop('post_categories')
  }
}

module.exports = PostCategorySchema
