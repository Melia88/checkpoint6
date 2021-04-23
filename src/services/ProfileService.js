import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
class ProfilePage {
  async getAll() {
    try {
      const res = await api.get('api/profile/')
      AppState.activeProfile = res.data
    } catch (error) {
      logger.log('EROOOORRRR!', error)
    }
  }
}

export const profilePage = new ProfilePage()
