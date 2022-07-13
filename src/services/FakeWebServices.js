import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class FakeWebService {
  
  switchPage() {
      return AppState.page = !AppState.page
  }
  
}

export const fakeWebService = new FakeWebService()
