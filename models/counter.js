const mongoose=require('mongoose');

const counterSchema=mongoose.Schema({
    value:{
        type:Number,
        default:0
    }
})

const Counter=mongoose.model('Counter',counterSchema)

module.exports=Counter