// 文件上传接口
const router = require("express").Router();
const multer = require("multer");

// 设置存储信息
var storage = multer.diskStorage({
  // 路径
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  // 文件名
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage }); // 设置存储信息

router.post("/file_update", upload.single("file"), (req, res) => {
  res.json({
    code: 1,
    info: "/uploads/" + req.file.filename,
  });
});

module.exports = router;
