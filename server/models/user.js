// schema import here
const {Schema, model} = require ('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator')

// import schema from yard.js
const YardSchema = require('./yard');

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
        match: /.+@.+\..+/,
    },
    password: {
        type: String,
        required: true
    },
    // set userYards to be an array of data that adheres to the YardSchema
    userYards: [{
      type: Schema.Types.ObjectId,
      ref: "Yard",
    }],
  },
  {
    toJSON: {
          virtuals: true,
        },
          id: false,
});

// static signup method
UserSchema.statics.signup = async function(email, name, password) {

  // validation
  if (!email || !name || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }


  const existsEmail = await this.findOne({ email })

  if (existsEmail) {
    throw Error('Email already in use')
  }

  // const existsUsername = await this.findOne({ name })

  // if (existsUsername) {
  //   throw Error('Username already in use')
  // }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, name, password: hash })

  return user
}



// static login method
UserSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

// signup and login 
// hash user password
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const yeahBruhNawl = 10;
      this.password = await bcrypt.hash(this.password, yeahBruhNawl );
    }
    next();
  });
  
  // custom method to compare and validate password for logging in
  UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
 
const User = model("User", UserSchema);
module.exports = User;