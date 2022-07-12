import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class FakeWebService {
  
  switchPage(num) {
      AppState.page = num
  }
  
}

export const fakeWebService = new FakeWebService()
