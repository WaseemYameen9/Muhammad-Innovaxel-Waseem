const mongoose = require('mongoose')

const urlSchema = mongoose.Schema(
{
    originalUrl: String,
    shorterUrl: String,
    accessCount: Number

},{timestamps: true}
)

module.exports = mongoose.model('Url',urlSchema)