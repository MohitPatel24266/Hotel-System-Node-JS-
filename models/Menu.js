//model/menu.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['spicy','sour','sweet'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    num_sales: {
        type: Number,
        default: 0,
    },
});

//Create menu model

const MenuItem = mongoose.model('MenuItem', menuSchema);
module.exports = MenuItem; 