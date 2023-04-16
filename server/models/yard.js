// schema import here
const {Schema, model} = require ('mongoose');

// YardSchema
const YardSchema = new Schema ({
    // username
    name:{
        type: String,
        unique: true,
        required: true,
    },
    cost:{
        type: Number,
        unique: true,
        required: true,
    },
    toJSON: {
          virtuals: true,
        },
        id: false,
    
});


const Yard = model("Yard", YardSchema);
module.exports = Yard;