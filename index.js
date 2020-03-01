import express from 'express'

const router = express.Router()

router.get('/item', (req, res, next) => {
  res.send({baseball: 23, baseball_glove: 13, basketball: 53})
})

router.post('/item', (req, res, next) => {
  const { item } = req.body
  if (item) res.sendStatus(201)
  else res.sendStatus(500) && next()
})

export default router
