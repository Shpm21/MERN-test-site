import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        rating: {type: Number, required: true},
        comment: {type: String, required: true}
    },{
        timestamps: true
    }
)

// aquí se crea la estructura (tipo y datos)  de la colección (sería tabla pero es noSQL)

const productSchema = mongoose.Schema({
    // acá para saber el usuario por producto (relaciona producto con usuario)
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // aquí le pasamos la lista de opiniones sobre el producto tmb tiene estructura
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product