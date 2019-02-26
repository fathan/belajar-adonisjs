'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Post = use('App/Models/Post')

// generator data
const Chance = require('chance')
const chance = new Chance()

class PostSeeder {
  async run () {
    for (let i = 0; i < 30; i++) {
      const post = new Post()
      post.post_category_id = 1
      post.title = chance.sentence({ words: 5 })
      post.content = chance.paragraph()
      post.status = true

      await post.save()
    }
  }
}

module.exports = PostSeeder
