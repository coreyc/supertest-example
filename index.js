import express from 'express'

const router = express.Router()

router.get('/item', (req, res, next) => {
  const { term } = req.query
  if (term) res.send(term) // just send it back for demo purposes
  res.send({baseball: 23, baseball_glove: 13, basketball: 53})
})

router.post('/item', (req, res, next) => {
  const { item } = req.body
  if (item) res.sendStatus(201)
  else res.sendStatus(500) && next()
})

router.get('/user', (req, res, next) => {
  
})

export default router
