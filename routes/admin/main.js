const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("admin/main");
})

module.exports = router;