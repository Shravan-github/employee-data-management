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
      console.error(error);
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

    // Checking okkavela user unnaara ledhaa?
    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }

    //password Compare chesi adhi match avuthundhaa ledhaa anni chudadaniki
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    // Create a JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    return res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
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
