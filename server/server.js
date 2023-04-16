require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
// middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.use(require('./routes'));

// communicate which database to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/YardMe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//log mongo queries being executed
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
