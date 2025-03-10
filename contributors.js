// eslint-disable-next-line prettier/prettier
import { execSync } from 'child_process';

const rawContributors = execSync(
  "git log --format='%ae' $(git describe --tags --abbrev=0)..HEAD | sort | uniq"
)
  .toString()
  .trim()
  .split('\n')

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const fetchGitHubUsername = async email => {
  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(
      `https://api.github.com/search/users?q=${email}+in:email`,
      {
        // eslint-disable-next-line no-undef
        headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` }
      }
    )
    if (response.data.items.length > 0) {
      return `@${response.data.items[0].login}`
    }
    return null
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null
  }
}

// Resolve os usuários e imprime
;(async () => {
  const usernames = await Promise.all(rawContributors.map(fetchGitHubUsername))
  return usernames.filter(Boolean).join(', ')
})()
