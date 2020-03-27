export default {
  development: {
    host: '',
    hostBackend: 'https://jsonplaceholder.typicode.com',
    port: 3001
  },
  production: {
    host: 'http://yourserver.com',
    hostBackend: 'http://localhost:3001/',
    port: 3001
  }
}[process.env.NODE_ENV || 'development']
