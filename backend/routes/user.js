import express from "express";
import fetchuser from "../middleware/fetchuser.js";
import UserDetail from "../models/Users.js";
const userRouter = express.Router();

//  1: Get All the Notes using: GET "/api/auth/getuser". Login required
userRouter.get("/fetchalluser", fetchuser, async (req, res) => {
  try {
    const users = await UserDetail.find({ user: req.userID });
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//  2: Add a new Note using: POST "/api/auth/addUser". Login required
userRouter.post(
  "/addusers",
  fetchuser,

  async (req, res) => {
    try {
      const { name, registered, country, usage, payment, activity } = req.body;

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const user = new UserDetail({
        name,
        registered,
        country,
        usage,
        payment,
        activity,
        user: req.userID,
      });
      const savedUser = await user.save();

      res.json(savedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//  3: Update an existing user using: PUT "/api/user/updateuser". Login required
userRouter.put("/updateUser/:id", fetchuser, async (req, res) => {
  const { registered, country, usage, payment, activity } = req.body;
  try {
    // Create a newNote object
    const newUser = {};
    if (registered) {
      newUser.registered = registered;
    }
    if (country) {
      newUser.country = country;
    }
    if (usage) {
      newUser.usage = usage;
    }
    if (payment) {
      newUser.payment = payment;
    }
    if (activity) {
      newUser.activity = activity;
    }

    // Find the user to be updated and update it
    let user = await UserDetail.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Not Found");
    }

    user = await UserDetail.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//  4: Delete an existing usr using: DELETE "/api/user/deleteUser". Login required
userRouter.delete("/deleteUser/:id", fetchuser, async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let user = await UserDetail.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Not Found");
    }


    user = await UserDetail.findByIdAndDelete(req.params.id);
    res.json({ Success: "user has been deleted", user: user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

export default userRouter;
