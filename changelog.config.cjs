// eslint-disable-next-line no-undef
module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'test',
    'feat',
    'fix',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
    'build',
    'revert'
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues'],
  scopes: ['core', 'test', 'docs', 'release', 'lint', 'all', 'npm'],
  types: {
    chore: {
      description: "Other changes that don't modify src or test files",
      emoji: '🩹',
      value: 'chore'
    },
    ci: {
      description:
        'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
      emoji: '📦',
      value: 'ci'
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '📘',
      value: 'docs'
    },
    feat: {
      description: 'A new feature',
      emoji: '✨',
      value: 'feat'
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐞',
      value: 'fix'
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf'
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '♻️',
      value: 'refactor'
    },
    revert: {
      description: 'Reverts a previous commit',
      emoji: '⏪',
      value: 'revert'
    },
    build: {
      description:
        'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      emoji: '🛠️',
      value: 'build'
    },
    style: {
      description:
        'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
      emoji: '🎨',
      value: 'style'
    },
    test: {
      description: 'Adding missing tests or correcting existing tests',
      emoji: '🧪',
      value: 'test'
    },
    messages: {
      type: "Select the type of change that you're committing:",
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n'
    }
  }
}
