import bodyParser from 'body-parser'
import cors from 'cors'
import errorhandler from 'errorhandler'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import serveStatic from 'serve-static'

const port = 3000

const app = (() => {
  const app = express()
  app.use(bodyParser.json())

  // Note that this is a security risk! Have a better strategy in production.
  app.use(cors({ methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }))

  app.use(morgan('tiny'))

  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler())
  }

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

  app.use(serveStatic(path.join(__dirname, 'public')))

  return app
})()

app.get('/', async (_, res) => {
  res.send('hello, world!')
})
