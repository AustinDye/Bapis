import { Octokit } from "https://cdn.skypack.dev/@octokit/core";


 
const octokit = new Octokit({
  auth: 'personal-access-token123'
})

await octokit.request('GET /users/{username}', {
  username: 'USERNAME'
})

