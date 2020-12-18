const router = require('express').Router();
const Movie = require('../../models/movie');

// 数据库展示到影片信息页面中
router.get('/',async (req, res) => {
    const data = await Movie.find().sort({_id:-1});
    res.render("admin/movies/index", {
        data
    })
})

router.get('/', (req, res) => {
    res.render("admin/movies/index");
})
router.get('/new', (req, res) => {
    // 返回一个view渲染之后得到的HTML文本
    res.render("admin/movies/new");
})

// 新增影片
router.post('/create',async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    // 重定向到影片列表页
    res.redirect('/admin/movies');
})
module.exports = router;