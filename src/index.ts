import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const port = 3000

const app = (() => {
  const app = express()
  app.use(bodyParser.json())
  app.use(cors({ methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }))
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

  return app
})()

app.get('/', async (_, res) => {
  res.send('hello, world!')
})
