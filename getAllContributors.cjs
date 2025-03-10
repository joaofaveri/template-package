/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-require-imports */
const { execSync } = require('child_process')
/**
 * Obtém os contribuidores do último release e resolve seus nomes de usuário no GitHub.
 */
async function getContributors() {
  try {
    // Obtém os e-mails únicos dos contribuidores desde o último tag
    const emails = execSync(
      "git log --format='%ae' $(git describe --tags --abbrev=0)..HEAD | sort | uniq"
    )
      .toString()
      .trim()
      .split('\n')
      .filter(email => email) // Remove linhas vazias

    if (emails.length === 0) {
      console.log('No contributors found.')
      return []
    }

    // Mapeia os e-mails para nomes de usuário do GitHub
    const usernames = await Promise.all(
      emails.map(async email => {
        try {
          const response = await fetch(
            `https://api.github.com/search/users?q=${email}+in:email`
          )

          if (!response.ok)
            throw new Error(`GitHub API error: ${response.status}`)

          const data = await response.json()
          return `@${data.items[0].login}`
        } catch (error) {
          return error
        }
      })
    )

    return usernames
  } catch (error) {
    console.error('❌ Error fetching contributors:', error.message)
    process.exit(1)
  }
}

// ✅ Executando a função corretamente dentro de um IIFE
;(async () => {
  const contributors = await getContributors()
  console.log(`export RELEASE-IT_CONTRIBUTORS="${contributors.join(', ')}"`)
})()
