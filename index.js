const express = require('express')
const path = require('path')

const app = express()

app.use(express.static("public"))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Test project (production) successfully hosted.`)
})