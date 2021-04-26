import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class ProfileService {
  async getAll() {
    try {
      const res = await api.get('api/profile/')
      AppState.activeProfile = res.data
    } catch (error) {
      logger.log('EROOOORRRR!', error)
    }
  }

  async getActiveProfile(id) {
    const res = await api.get('api/profiles/' + id)
    AppState.activeProfile = res.data
  }

  async getProfilePosts(id) {
    const res = await api.get(`api/profiles/${id}/posts`)
    AppState.profilePosts = res.data.posts
  }
}

export const profileService = new ProfileService()
