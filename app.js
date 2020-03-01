import express from 'express'
import routes from './'

const app = express()

app.use(express.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(express.json()) // Used to parse JSON bodies

app.get('/', (req, res) => res.send('App is working'))

app.use('/api', routes)

export default app
