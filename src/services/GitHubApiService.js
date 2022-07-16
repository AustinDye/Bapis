
import { AppState } from '../AppState'
import { GitUser } from '../Models/GitUser';
import { logger } from '../utils/Logger'

import { api, github } from './AxiosService'

class GitHubApiService { 
  
 async getProfile() {
  const res = await github.get("");
  AppState.gitUser = new GitUser(res.data)
 }

}

export const gitHubApiService = new GitHubApiService()
