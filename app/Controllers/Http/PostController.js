'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index ({request, response}) {
    try {
      const posts = await Post
        .query()
        .from('posts')
        .orderBy('id', 'desc')
        .with('post_category')
        .paginate(request._qs.page, request._qs.perPage)

      return response.status(200).json({
        error: false,
        data: posts,
        message: 'OK'
      })
    } catch (error) {
      return response.status(400).json({
        error: true,
        message: 'Could not post'
      })
    }
  }

  async show ({params, request, response}) {
    try {
      const post = await Post.find(params.id)

      return response.status(200).json({
        error: false,
        data: post,
        message: 'OK'
      })
    } catch (error) {
      return response.status(400).json({
        error: true,
        message: 'Could not show post'
      })
    }
  }

  async create ({request, response}) {
    const body = request.all()

    try {
      const post = new Post()
      post.post_category_id = body.post_category_id
      post.title = body.title
      post.content = body.content
      post.status = body.status
      await post.save()

      return response.status(201).json({
        error: false,
        data: post,
        message: 'Data has been created'
      })
    } catch (error) {
      return response.status(400).json({
        error: true,
        message: 'Error create post'
      })
    }
  }

  async update ({params, request, response}) {
    const body = request.all()
    const post = await Post.find(params.id)

    try {
      post.post_category_id = body.post_category_id
      post.title = body.title
      post.content = body.content
      post.status = body.status

      await post.save()

      return response.status(201).json({
        error: false,
        data: post,
        message: 'Updated successfully'
      })
    } catch (error) {
      return response.status(400).json({
        error: true,
        message: 'Could not update post'
      })
    }
  }

  async destroy ({params, request, response}) {
    const post = await Post.find(params.id)

    try {
      await post.delete()

      return response.status(201).json({
        error: false,
        message: 'Data has been deleted'
      })
    } catch (error) {
      return response.status(400).json({
        error: true,
        message: 'Could not delete post'
      })
    }
  }
}

module.exports = PostController
