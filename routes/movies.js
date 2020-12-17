// 路由组件
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', async (req, res) => {
    const query = {};
    if (req.query.title) {
        query.title = new RegExp(req.query.title);
    }
    const data = await Movie.find();
    res.render("movies/index", {
        data
    });
})

// 播放
router.get('/show', async (req, res) => {
    // 获取URL中的ID
    const data = await Movie.findById(req.query.id);
    res.render("movies/show", {
        data
    });
})


module.exports = router;