const express = require('express')
const next = require('next')
const morgan = require('morgan');

const userRouter = require("./router/user")

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 4000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use("/api/users", userRouter)

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
