const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("admin/movies/index");
})
router.get('/new', (req, res) => {
    res.render("admin/movies/new");
})

module.exports = router;