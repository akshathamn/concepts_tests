const app = require('../server.js')
const supertest = require('supertest')
const request = supertest(app)
// const request = require('request')
const User = require('../models/signin')
// const mongoose = require('mongoose')
// const databaseName = 'test1'

// beforeAll(async () => {
//   const url = `mongodb://127.0.0.1:27017/${databaseName}`
//   await mongoose.connect(url, { useNewUrlParser: true })
// })

// afterEach(async () => {
//   await User.deleteMany()
// })
it('Should save user to database', async (done) => {
    const res = await request.post('/signup')
      .send({
        name: 'Zell1',
        email: 'jesttest1@gmail.com'
      })
      const user = await User.findOne({ email: 'jesttest1@gmail.com' })
    done();
  })
