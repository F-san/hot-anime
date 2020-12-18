const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("admin/categories/index");
})
router.get('/new', (req, res) => {
    res.render("admin/categories/new");
})

module.exports = router;