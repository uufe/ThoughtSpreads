const domainConfig = {
  development: 'http://localhost:3001',
  production: ''
}
const domain = domainConfig[process.env.NODE_ENV]

const resources = {
  home: '/'
}

export default {
  domain,
  resources
}
