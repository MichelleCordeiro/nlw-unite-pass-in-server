import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello NLW'
})

app.get('/test', () => {
  return 'Hello test'
})

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP server running!')
})