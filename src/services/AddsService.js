import { AppState } from '../AppState'
import { api } from './AxiosService'
class AddsService {
  async getAll() {
    const res = await api.get('api/ads')
    AppState.adds = res.data
    // console.log(res.data)
  }
}

export const addsService = new AddsService()
