const express = require('express')
const router = express.Router()

const app = express()
const users = router.get('/', (req, res, next) => {
  res.json([
    { id: 1, username: 'Fred' },
    { id: 2, username: 'Sandy' }
  ])
})
app.use('/users', users)
app.use('/', (req, res) => res.send('hello,world'))

app.listen(3007, console.log('server running...'))
