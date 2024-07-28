const mongoose = require('mongoose');
const docSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true },
   
    age: { type: Number, required: true },
    phno: { type: String, required: true,unique:true },
    gender: { type: String, required: true },
    exp: { type: Number },
    prevCompany: { type: String },
    patConsult: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pats',
        }
    ]
})

const Doc = mongoose.model("Doc", docSchema);
module.exports = { Doc};