const express = require('express')
// const cors = require('cors')
const router = express.Router()
const app = express()
// app.use(cors())

// enable cors (alternative to above)
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

const users = router.get('/users', (req, res) => {
  res.json([
    { id: 1, username: '052541' },
    { id: 2, username: 'B5688f' },
    { id: 3, username: 'xRdd35' },
    { id: 4, username: 'no-ref' },
    { id: 5, username: 'null' }
  ])
})

const graph = router.get('/graph', (req, res) => {
  res.json({ 'data': [
    { x: 1, y: 9 },
    { x: 2, y: 4 },
    { x: 3, y: 5 },
    { x: 4, y: 7 },
    { x: 5, y: 3 },
    { x: 6, y: 8 },
    { x: 7, y: 1 },
    { x: 8, y: 11 },
    { x: 9, y: 21 }
  ] })
})
app.use('/api', users)
app.use('/api', graph)
app.use('/', (req, res) => res.send('hello,world'))

const PORT = 4000
app.listen(PORT, console.log(`server running on ${PORT}`))
