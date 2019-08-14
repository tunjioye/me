const ghpages = require('gh-pages')
const { repo } = require('../me-config')

// replace with your repo url
ghpages.publish(
  `public`,
  {
    message: `Updates : this message is an auto-generated`,
    branch: `master`,
    repo: `${repo}`,
  },
  () => {
    console.log('Site is Published!')
  }
)
