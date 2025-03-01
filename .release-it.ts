import type { Config } from 'release-it'

export default {
  git: {
    commitMessage:
      ':bookmark: chore(release): new release - v${version} [generated by release-it]',
    commitArgs: ['-n', '-v', '-S'],
    tagArgs: ['-s']
  },
  github: {
    release: true,
    releaseName: 'Release ${version}',
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
        '# :tada: Changelog\n\nAll notable changes to this project will be documented in this file.This project follows the [Conventional Commits](https://www.conventionalcommits.org) specification and adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\nThis changelog is automatically generated using [`release-it`](https://github.com/release-it/release-it) and [`conventional-changelog`](https://github.com/release-it/conventional-changelog) plugin.',
      context: {
        version: '${version}',
        date: "${new Date().toISOString().split('T')[0]}",
        tagUrl: '${releaseUrl}',
        compareUrl: '${releaseUrl}/compare/${previousTag}...${version}',
        issuesUrl: '${releaseUrl}/issues',
        contributors:
          // eslint-disable-next-line no-useless-escape
          "${exec('git log --format=\'%an <%ae>\' $(git describe --tags --abbrev=0)..HEAD | sort | uniq')}"
      },
      writerOpts: {
        headerPartial:
          '# :notebook:Release Notes\n\n## [{{version}}]({{tagUrl}}) - {{date}}\n\nThis file keeps track of all the important changes made to this project',
        footerPartial:
          '\n***\n\n## :bookmark: Footer Notes\n\n[Comparing changes with Previous Release]({{compareUrl}})\n\n[View Issues]({{issuesUrl}})\n\n:clap: This release was made possible by our amazing contributors:\n\n{{contributors}}\n\n'
      },
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
