const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Card = new Schema({
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    listen: {
        type: String
    },
    buy: {
        type: String
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
    section: {
        type: String
    },
    free: {
      type: String
    }
});

module.exports = mongoose.model('Card', Card);
