const express = require('express')
const { Article } = require('./model')

const router = express.Router()

// 新增文章
router.post('/api/articles', async(req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})

// 文章列表
router.get('/api/articles', async(req, res) => {
    const articles = await Article.find()
    res.send(articles)
})

// 删除文章
router.delete('/api/articles/:id', async(req, res) => {
    const articles = await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})

// 文章详情
router.get('/api/articles/:id', async(req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})

// 修改文章
router.put('/api/articles/:id', async(req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send(article)
})


module.exports = router