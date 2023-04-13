// schema import here
const {Schema, model} = require ('mongoose');
// npm install validator ( this package sanitizes/validates strings)
const validator = require ('validator')
// UserSchema
const UserSchema = new Schema ({
    // username
    name:{
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // regex match
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true
    },
    
//     {
//         toJSON: {
//           virtuals: true,
//         },
//         id: false,
//     },




})



// signup and login with validators!
// USER SIGNUP
// USER LOGIN

// const User = model("User", UserSchema);
module.exports = User;
