import request from 'supertest'
import app from './app'

describe('item route', () => {
  describe('#get', () => {
    it('should return a 200 with successful items', async () => {
      await request(app)
        .get('/api/item')
        .expect(200)
    })
  })

  describe('#post', () => {
    it('should return a 201 when an item is successfully created', async () => {
      await request(app)
        .post('/api/item')
        .send({item: 'fishing rod'})
        .expect(201)
    })
  })
})
