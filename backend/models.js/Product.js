const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name : {type : Number, required : true},
    rating : { type : Number, required : true},
    comment : {type : String, required : true}
}, {
    timestamps : true
})

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
        default : 0
    },
    category : {
        type : String,
        required : true
    },
    reviews  : [reviewSchema],
    rating : {
        type : Number,
        required : true,
        default : 0
    },
    countInStock : {
        type : Number,
        required : true,
        default : 0
    },

}, {
    timestamps : true
})

module.exports = mongoose.model('Product', productSchema);