// const express = require("express");
// const mongoose = require("mongoose");
// const Signup = require("./model");
// const middleware = require("./middleware");
// const cors = require("cors");
// const { upload } = require("@testing-library/user-event/dist/upload");
// const app = express();

// // mongoose
// //   .connect(
// //     "mongodb+srv://shravansunkari07:shravansunkari07@cluster0.imhjbo3.mongodb.net/UsersData?retryWrites=true&w=majority&appName=Cluster0",
// //     {
// //       useUnifiedTopology: true,
// //       useNewUrlParser: true,
// //       // useCreateIndex : true,
// //     }
// //   )
// //   .then(() => console.log("DB Connection Established"));

// app.listen(3636, () => {
//   console.log("Listening to port 3636");
// });

// let userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
//   confirmPassword: String,
// })

// let User = new mongoose.model("user", userSchema)

// let connectToMDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://shravansunkari07:shravansunkari07@cluster0.imhjbo3.mongodb.net/UsersData?retryWrites=true&w=majority&appName=Cluster0"
//     );
//     console.log("Connected To MDB Successfully");
//   } catch (error) {
//     console.log("Unable to connect to MDB");
//   }
// };
// connectToMDB();

// app.use(express.urlencoded());

// app.use(cors({ origin: "*" }));

// app.post("/signup", async (req, res) => {
//   console.log(req.body);
//   console.log("Succefully user details saved");
//   try {
//     let newUser = new UserActivation({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       password: req.body.password,
//       confirmPassword: req.body.confirmPassword,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send("Server Error");
//   }
// });

// app.post("/signin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     let exist = await Signup.findOne({ email });
//     if (!exist) {
//       return res.status(200).send("User not found");
//     }
//     if (exist.password !== password) {
//       return res.status(400).send("Invalid credentials");
//     }
//     let payload = {
//       user: {
//         id: exist.id,
//       },
//     };

//     jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
//       if (err) throw err;
//       return res.json({ token });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send("Server Error");
//   }
// });

// app.post("validateSignin", upload.none(), (req, res) => {
//   console.log(req.body);

//   // res.json(status:"success", msg:"")
// });

// app.get("/home", middleware, async (req, res) => {
//   try {
//     let exist = await Signup.findById(req.user.id);
//     if (!exist) {
//       return res.status(400).send("User not found");
//     }
//     res.status(200).send(exist);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Server Error");
//   }
// });






// app.listen(3636, () => {
//   console.log("Server running...");
// });

// let connectToMDB = () => {
//   try {
//     mongoose.connect(
//       "mongodb+srv://shravansunkari07:shravansunkari07@cluster0.imhjbo3.mongodb.net/UsersData?retryWrites=true&w=majority&appName=Cluster0"
//     ).then()=> console.log("DB Connection est ")
//     console.log("Succefully Connect To MDB");
//   } catch (error) {
//     console.log("Unable to connect MDB");
//     console.log(error);
//   }
// };

// connectToMDB();

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



//2nd server


// const express = require("express");
// const mongoose = require("mongoose");
// const Signup = require("./model");
// const middleware = require("./middleware");
// const cors = require("cors");
// const app = express();

// mongoose
//   .connect(
//     "mongodb+srv://shravansunkari07:shravansunkari07@cluster0.imhjbo3.mongodb.net/UsersData?retryWrites=true&w=majority&appName=Cluster0",
//     {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex : true,
//     }
//   )
//   .then(() => console.log("DB Connection Estabilished"));

// app.use(express.json());

// app.use(cors({ orgin: "*" }));

// app.post("/signup", async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, confirmPassword } = req.body;
//     let user = await Signup.findOne({ email });
//     if (user) {
//       return res.status(400).send("User Already Exist");
//     }
//     if (password !== confirmPassword) {
//       return res.status(400).send("Passwords are not matching");
//     }

//     let newUser = new Signup({
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//     });
//     await newUser.save();
//     res.status(201).send("SignUp Succefully");
//   } catch (error) {
//     console.log(err);

//     return res.status(500).send("Internal server error");
//   }
// });

// app.post("/signin", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     let exist = await Signup.findOne({ email });
//     if (!exist) {
//       return res.status(200).send("user not found");
//     }
//     if (exist.password !== password) {
//       return res.status(400).send("Invalid credentials");
//     }
//     let payload = {
//       user: {
//         id: exist.id,
//       },
//     };

//     jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
//       if (err) throw err;
//       return res.json({ token });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send("Server Error");
//   }
// });

// app.get("/home", middleware, async (req, res) => {
//   try {
//     let exist = await Signup.findById(req.user.id);
//     if (!exist) {
//       return res.status(400).send("User not found");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.listen(3636, () => {
//   console.log("Server Running...");
// });



const express = require("express");
const mongoose = require("mongoose");
const Signup = require("./model");
const middleware = require("./middleware");
const cors = require("cors");
const app = express();

mongoose
  .connect(
    "mongodb+srv://shravansunkari07:shravansunkari07@cluster0.imhjbo3.mongodb.net/UsersData?retryWrites=true&w=majority&appName=Cluster0",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB Connection Established"))
  .catch((err) => console.error("DB Connection Error: ", err));

app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/signup", async (req, res) => {
  console.log("Incoming signup request: ", req.body); 
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;
    let user = await Signup.findOne({ email });
    if (user) {
      return res.status(400).send("User Already Exist");
    }
    if (password !== confirmPassword) {
      return res.status(400).send("Passwords are not matching");
    }

    let newUser = new Signup({
      firstName,
      lastName,
      email,
      password,    
      confirmPassword,
    });
    await newUser.save();
    res.status(201).send("SignUp Successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
});

app.post("/signin", async (req, res) => {
  console.log("Incoming signin request: ", req.body); 
  try {
    const { email, password } = req.body;
    let exist = await Signup.findOne({ email });
    if (!exist) {
      return res.status(200).send("User not found");
    }
    if (exist.password !== password) {
      return res.status(400).send("Invalid credentials");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };

    jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(400).send("Server Error");
  }
});

app.get("/home", middleware, async (req, res) => {
  try {
    let exist = await Signup.findById(req.user.id);
    if (!exist) {
      return res.status(400).send("User not found");
    }
  } catch (error) {
    console.error(error);
  }
});

app.listen(3636, () => {
  console.log("Server Running...");
});
