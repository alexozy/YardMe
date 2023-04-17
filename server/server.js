require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// const PORT = process.env.PORT || 3001;
// middleware


app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001.`);
});

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

// app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
