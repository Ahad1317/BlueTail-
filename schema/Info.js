const mongoose = require("mongoose")

const InfoSchema = new mongoose.Schema(
    {
        petId:{
            type:String,
            required:true,
            unique:true,
        },
        petName: {
            type: String,
            required: true,
            min:3,
            max:20,
        },
        ownerName:{
            type:String,
            required: true,
            min:3,
            max:30, 

        },
        age:{
            type:Number,
            required:true,
        },
        type:{
            type: String,
            required:true,
        },
        gender:{
            type: String,
            enum: ['male', 'female', 'unknown'],
        },
    },
    {timestamps:true}
)

module.exports = mongoose.model("Info",InfoSchema)