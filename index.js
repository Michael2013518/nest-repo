const express = require('express')
const multer = require('multer')
const cores = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(cores())


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      fs.mkdirSync(path.join(process.cwd(), 'uploads'));
    } catch (e) {
      console.log('e:', e)
    }

    cb(null, path.join(process.cwd(), 'uploads'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});
const upload = multer({
  // dest: 'uploads/'
  storage
})
app.post('/aaa', upload.single('aaa'), (req, res, next) => {
  const { originalname, path } = req.file
  const fileName = Buffer.from(originalname, 'latin1').toString('utf-8')
  const newPath = path + '_' + fileName
  console.log(newPath)
  console.log(req.body)
  res.send('ok')
})

app.post('/bbb', upload.array('bbb', 2), (req, res, next) => {
  console.log(req.files)
  console.log(req.body)
  res.send('ok')
}, (err, req, res, next) => {
  if (err instanceof MulterError && err.code === 'LIMIT_UNEXPECTED_FILE') {
    res.status(400).send('Too many files to upload.')
  }
})

app.post('/ccc', upload.fields([{ name: 'ccc', maxCount: 2 }, { name: 'ddd', maxCount: 3 }]), (req, res, next) => {
  console.log(req.files)
  console.log(req.body)
  res.send('ok')
})

app.post('/ddd', upload.any(), (req, res, next) => {
  console.log(req.files)
  console.log(req.body)
  res.send('ok')
})
app.listen(30000, () => {
  console.log('Server is running on http://localhost:30000')
})
