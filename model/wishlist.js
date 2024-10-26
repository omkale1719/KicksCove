const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Listing',
                required: true
            },
            addedAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = mongoose.model('Wishlist', wishlistSchema);
