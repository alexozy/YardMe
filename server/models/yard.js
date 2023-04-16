// schema import here
const {Schema, model} = require ('mongoose');

// const YardSchema = require('./yards');
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
},
{
    toJSON: {
          virtuals: true,
        },
        id: false,
    
});

 // when we query a user, we'll also get another field called `yards` with the number of yards we have
  // UserSchema.virtual('yards').get(function () {
  //   return this.savedYards.length;
  // });


const Yard = model("Yard", YardSchema);
module.exports = Yard;