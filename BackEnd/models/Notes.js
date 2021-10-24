const mongoose = require('mongoose');

const NotesSchema = new Schema({
   
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    dtae: {
        type: Date,
        default: Date.now 
    },
  });




// To Use NotesSchema
module.exports = mongoose.model('notes', NotesSchema);     