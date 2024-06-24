const express = require('express')
const multer = require('multer')
const cores = require('cors')

const app = express()
app.use(cores())

const upload = multer({
  dest: 'uploads/'
})

app.post('/aaa', upload.single('aaa'), (req, res, next) => {
  const { originalname, path } = req.file
  const fileName = Buffer.from(originalname, 'latin1').toString('utf-8')
  const newPath = path + '_' + fileName
  console.log(newPath)
  console.log(req.body)
  res.send('ok')
})

app.listen(30000, () => {
  console.log('Server is running on http://localhost:30000')
})
