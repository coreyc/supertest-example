import express from 'express'
import cookieParser from 'cookie-parser'

import routes from './'

const app = express()

app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(express.json()) // Used to parse JSON bodies
app.use(cookieParser())

app.get('/', (req, res) => res.send('App is working'))

app.get('/cookie', (req, res) => {
  res.cookie('cookie', 'example-cookie')
  res.send()
})

app.use('/api', routes)

export default app
