const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/element-admin'

mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => console.log('数据库连接成功...'))
    .catch(err => console.log('数据库连接失败...'))

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = { Article }