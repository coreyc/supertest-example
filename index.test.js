import request from 'supertest'
import { expect } from 'chai'
import app from './app'

describe('API', () => {
  describe('/item', () => {
    describe('#get', () => {
      it('should return a 200 with successful items', async () => {
        await request(app)
          .get('/api/item')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .then(res => {
            expect(res.body).to.deep.equal({baseball: 23, baseball_glove: 13, basketball: 53})
          })
      })

      it('should accept a query string', async () => {
        await request(app)
          .get('/api/item')
          .query({term: 'soccer cleats'})
          .expect(200)
          .then(res => {
            expect(res.text).to.equal('soccer cleats')
          })
      })
    })

    describe('#post', () => {
      it('should return a 201 when an item is successfully created', async () => {
        await request(app)
          .post('/api/item')
          .send({item: 'fishing rod'})
          .expect(201)
      })

      it('should return a 500 in case of an error', async () => {
        await request(app)
          .post('/api/item')
          .send({bad_data: 'afafaf'})
          .expect(500)
      })
    })
  })

  describe('/user', () => {
    describe('#post', () => {
      it('should work with an authenticated user', async () => {
        await request(app)
          .post('/api/user')
          .auth('username', 'password')
          .expect(200)
      })
    })
  })

  describe('/store', () => {
    describe('#get', () => {
      it('should 404 for nonexistent route', async () => {
        await request(app)
          .get('/store')
          .expect(404)
      })
    })
  })
})

describe('/cookie', () => {
  describe('#get', () => {
    it('should save cookies', async () => {
      await request(app)
        .get('/cookie')
        .expect('set-cookie', 'cookie=example-cookie; Path=/')
    })
  })
})
