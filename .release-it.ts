import type { Config } from 'release-it'

import { execSync } from 'child_process'
import fs from 'fs'
// Templates for Changelog and Release Notes
const footerCustomTemplate = fs
  .readFileSync('./templates/changelog-footer.hbs')
  .toString()
const headerCustomTemplate = fs
  .readFileSync('./templates/changelog-header.hbs')
  .toString()
const commitCustomTemplate = fs
  .readFileSync('./templates/changelog-commit.hbs')
  .toString()
const mainCustomTemplate = fs
  .readFileSync('./templates/changelog-main.hbs')
  .toString()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function putContributorsInContext(context: { contributors: string }) {
  console.log('👥 Fetching contributors...')
  try {
    // Executa o script get-contributors.js e captura a saída como string
    const contributors = execSync('node getAllContributors.cjs', {
      encoding: 'utf-8'
    }).trim()

    if (contributors) {
      context.contributors = contributors // Injeta no contexto
    } else {
      context.contributors = 'No contributors found.'
    }
  } catch (error) {
    console.error('❌ Error fetching contributors:', error)
    context.contributors = ' - '
  }

  return context
}

export default {
  git: {
    requireCleanWorkingDir: true,
    commitMessage:
      'chore(release): :bookmark: new release - v${version} [generated by release-it]',
    commitArgs: ['-n', '-v', '-S'],
    tagArgs: ['-s'],
    requireCommits: true,
    requireBranch: 'main'
  },
  github: {
    release: true,
    releaseName: 'v${version}',
    comments: {
      submit: false,
      issue:
        ':rocket: _This issue has been resolved in v${version}. See [${releaseName}](${releaseUrl}) for release notes._',
      pr: ':rocket: _This pull request is included in v${version}. See [${releaseName}](${releaseUrl}) for release notes._'
    }
  },
  npm: {
    publish: true
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      header:
        '# :tada: Changelog\n\nAll notable changes to this project will be documented in this file. This project follows the [Conventional Commits](https://www.conventionalcommits.org) specification and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html). This file is automatically generated using [`release-it`](https://github.com/release-it/release-it) and [`conventional-changelog`](https://github.com/release-it/conventional-changelog) plugin.',
      writerOpts: {
        mainTemplate: mainCustomTemplate,
        headerPartial: headerCustomTemplate,
        commitPartial: commitCustomTemplate,
        footerPartial: footerCustomTemplate
      },
      finalizeContext: putContributorsInContext,
      parserOpts: {
        noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
      },
      preset: {
        name: 'conventionalcommits',
        types: [
          {
            type: 'feat',
            section: ':sparkles: Features',
            hidden: false
          },
          {
            type: 'fix',
            section: ':lady_beetle: Bug Fixes',
            hidden: false
          },
          {
            type: 'refactor',
            section: ':adhesive_bandage: Other changes',
            hidden: false
          },
          {
            type: 'chore',
            section: ':adhesive_bandage: Other changes',
            hidden: false
          },
          {
            type: 'build',
            section: ':adhesive_bandage: Other changes',
            hidden: false
          },
          {
            type: 'docs',
            section: ':blue_book: Documentation',
            hidden: false
          },
          {
            type: 'style',
            section: ':art: Visual Changes',
            hidden: false
          },
          {
            type: 'perf',
            section: ':zap: Performance Improvements',
            hidden: false
          },
          {
            type: 'test',
            section: ':zap: Performance Improvements',
            hidden: false
          },
          {
            type: 'ci',
            section: ':zap: Performance Improvements',
            hidden: false
          },
          {
            type: 'revert',
            section: ':zap: Performance Improvements',
            hidden: false
          }
        ]
      }
    }
  }
} satisfies Config
