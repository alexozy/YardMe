// schema import here
const {Schema, model} = require ('mongoose');
// npm install validator ( this package sanitizes/validates strings)
const validator = require ('validator')
// UserSchema
const YardSchema = new Schema ({
    // username
    name:{
        type: String,
        unique: true,
        required: true,
    },
    cost:{
        type: Integer,
        unique: true,
        required: true,
    },
    // address: {
    //     type: String,
    //     required: true
    // },
    // city: {
    //     type: String,
    //     required: true
    // },
    // yardfeatures: {
    //     type: String,
    //     required: true
    // },
    
    // {
    //     toJSON: {
    //       virtuals: true,
    //     },
    //     id: false,
    // },
})


const Yard = model("Yard", YardSchema);
module.exports = Yard;