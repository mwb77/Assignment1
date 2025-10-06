import express from 'express'
const app = express()
app.get('/', (reg, res) => {
  res.send('Hello from Express APPPPP!')
})
export { app }
