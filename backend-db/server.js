const mongoose = require("mongoose");

let connectToMDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://shravansunkari07:shravansunkari07@cluster0.imhjbo3.mongodb.net/UsersData?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Succefully Connect To MDB");
  } catch (error) {
    console.log("Unable to connect MDB");
    console.log(error);
  }
};

connectToMDB();

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// const mongoURI = "mongodb+srv://shravansunkari07:shravansunkari07@cluster0.2npmnwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// const UserSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const User = mongoose.model('User', UserSchema);

// app.post('/signup', async (req, res) => {
//   const { firstName, lastName, email, password } = req.body;
//   try {
//     const newUser = new User({ firstName, lastName, email, password });
//     await newUser.save();
//     res.status(201).send(newUser);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.post('/signin', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email, password });
//     if (user) {
//       res.status(200).send(user);
//     } else {
//       res.status(400).send('Invalid credentials');
//     }
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

