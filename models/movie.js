const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 创建表结构
const modelSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    playUrl: {
        type: String
    },
    img: {
        type: String
    },
    categories: {
        type: []
    },

}, {
    timestamps: true
});

// 模块暴露，导出
module.exports = mongoose.model('movie', modelSchema);