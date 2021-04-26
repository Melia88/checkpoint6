import { AppState } from '../AppState'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    AppState.posts = res.data.posts
    AppState.older = res.data.older
    AppState.newer = res.data.newer
    // console.log(res.data)
  }

  // async getByCreatorId(id) {
  //   const res = await api.get(`api/profiles/${id}/posts`)
  //   AppState.posts = res.data.posts
  // }

  // getByCreatorId
  // NOTE creatorId is the same as getByProfileId
  // api/profiles/:id/posts

  // getBySearchQuery
  // NOTE see Vue-flix
  // api/posts?query=
  async getOlder() {
    const res = await api.get(AppState.older)
    AppState.posts = res.data.posts
    AppState.older = res.data.older
    AppState.newer = res.data.newer
  }

  async getNewer() {
    const res = await api.get(AppState.newer)
    AppState.posts = res.data.posts
    AppState.older = res.data.older
    AppState.newer = res.data.newer
  }

  async createPost(body) {
    const res = await api.post('api/posts', body)
    // AppState.posts.push(res.data)
    AppState.posts = [...AppState.posts, res.data]
    // console.log(res.data)
    // everytime a post is created, we will change pages
    // router.push({ name: 'CarDetails', params: { id: res.data.id } })
  }

  async likePost(id) {
    await api.post(`api/posts/${id}/like`)
    this.getAll()
  }

  async deletePost(id) {
    await api.delete('posts/' + id)
    AppState.posts = AppState.posts.filter(post => post.id !== id)
  }
}

export const postsService = new PostsService()
