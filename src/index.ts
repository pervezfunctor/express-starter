import express from 'express'
import bodyParser from 'body-parser'

const port = 3000

const app = (() => {
  const app = express()
  app.use(bodyParser.json())

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  })

  return app
})()

app.get('/', async (_, res) => {
  res.send('hello, world!')
})
