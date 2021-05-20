const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    topic: { type: String },
    location: { type: String },
    price: { type: Number },
    
})

module.exports = mongoose.model('Lesson', lessonSchema);