const express = require('express')
const bodyParser = require('body-parser')

const router = require('./router')

const app = express()

app.use(require('cors')())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)
app.listen(3000, () => console.log('服务器启动成功...'))