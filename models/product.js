const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,'product name must be provided']
    },
    price:{
        type: Number,
        required:[true,'product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 4.5,
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values: ['ikea', 'lamoda', 'adidas', 'nike'],
            message: '{Value} is not supported',
        }
        //['ikea', 'lamoda', 'adidas', 'nike'],
    },
})

module.exports = mongoose.model('Product', productSchema)