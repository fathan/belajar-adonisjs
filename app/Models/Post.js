'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {
  post_category () {
    return this.belongsTo('App/Models/PostCategory', 'post_category_id', 'id')
  }
}

module.exports = Post
